const pool = require("../helpers/postgre").pg

/**
 * @module DatabaseModel
 * Hier wird aus dem Datenbankobjekt eine Datenbankklasse mit Funktionen erstellt, um den pseudocode im SQL Sprache zu wandeln
 **/
module.exports = (
  tableName = "tasks",
  selectableProps = [],
  timeout = 10000,
) => {
  //estudar isto
  const create = async (props) => {
    console.log(props)
    try {
      var value_count = 1;
      var insert_values = [];
      var values = [];
      var selection = "*";

      var keys;

      if (Array.isArray(props)) {
        if (props.length === 0) {
          return;
        }
        keys = Object.keys(props[0]).join(",");
        props.forEach((prop) => {
          values = values.concat(Object.values(prop));
          var vals = [];
          Object.values(prop).forEach(() => {
            vals.push(`$${value_count}`);
            value_count++;
          });
          insert_values.push(`(${vals.join(",")})`);
        });
      } else {
        keys = Object.keys(props).join(",");
        values = values.concat(Object.values(props));
        var vals = [];
        Object.values(props).forEach(() => {
          vals.push(`$${value_count}`);
          value_count++;
        });
        insert_values.push(`(${vals.join(",")})`);
      }

      if (selectableProps.length > 0) {
        selection = selectableProps.join(",");
      }
      var str = `insert into ${tableName} (${keys}) values ${insert_values.join(
        ","
      )} returning ${selection}`;
      return (await pool.query(str, values)).rows;
    } catch (err) {
      throw new Error(err);
    }
  };

  const find_all = async () => {
    var values = [];

    var str = `Select * from ${tableName}`;
    return (await pool.query(str, values)).rows;
  };

  const find = async (filters) => {
    var selection = "*";
    var condition = "";
    var value_count = 1;
    var values = [];

    if (selectableProps.length > 0) {
      selection = selectableProps.join(",");
    }
    if (Object.keys(filters).length > 0) {
      condition = "where ";
      var keys = Object.keys(filters);
      values = values.concat(Object.values(filters));
      var cons = [];
      for (var i = 0; i < keys.length; i++) {
        cons.push(`${keys[i]} = $${value_count}`);
        value_count++;
      }
      condition += cons.join(" and ");
    }

    var str = `Select ${selection} from ${tableName} ${condition}`;
    return (await pool.query(str, values)).rows;
  };

  const update = async (filters, props) => {
    var condition = "";
    var properties = "";
    var value_count = 1;
    var values = [];
    var selection = "*";
    var keys;

    if (Array.isArray(props)) {
      if (props.length === 0) {
        return;
      }
      keys = Object.keys(props[0]);
      for (i = 0; i < props.length; i++) {
        var prop = props[i];
        values = values.concat(Object.values(prop));
        props = [];
        value_count = 1;
        for (var j = 0; j < keys.length; j++) {
          props.push(`${keys[j]} = $${value_count}`);
          value_count++;
        }
        if (i === 0) {
          properties += `${props.join(" , ")}`;
        } else {
          properties += ` , ${props.join(" , ")}`;
        }
      }
    } else {
      if (Object.keys(props).length > 0) {
        keys = Object.keys(props);
        values = values.concat(Object.values(props));
        props = [];
        for (i = 0; i < keys.length; i++) {
          props.push(`${keys[i]} = $${value_count}`);
          value_count++;
        }
        properties += props.join(" , ");
      }
    }

    if (Object.keys(filters).length > 0) {
      condition = "where ";
      keys = Object.keys(filters);
      values = values.concat(Object.values(filters));
      var cons = [];
      for (i = 0; i < keys.length; i++) {
        cons.push(`${keys[i]} = $${value_count}`);
        value_count++;
      }
      condition += cons.join(" and ");
    }

    if (selectableProps.length > 0) {
      selection = selectableProps.join(",");
    }
    var str = `Update ${tableName} set ${properties} ${condition} returning ${selection}`;
    return (await pool.query(str, values)).rows;
  };

  const destroy = async (filters) => {
    var condition = "";
    var value_count = 1;
    var values = [];
    if (Object.keys(filters).length > 0) {
      condition = "where ";
      var keys = Object.keys(filters);
      values = values.concat(Object.values(filters));
      var cons = [];
      for (var i = 0; i < keys.length; i++) {
        cons.push(`${keys[i]} = $${value_count}`);
        value_count++;
      }
      condition += cons.join(" and ");
      
    } else {
      throw new Error(`DELETE_WHOLE_TABLE_ERROR`);
    }

    var str = `delete from ${tableName} ${condition} returning *`;
    return (await pool.query(str, values)).rows;
  };

  return {
    create,
    find,
    find_all,
    update,
    destroy,
  };
};

//module.exports = Pool;
