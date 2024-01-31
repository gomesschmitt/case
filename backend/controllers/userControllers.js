const database = require('../DB/database');


const allTodos = async(req,res) => {
    try {
 //       const allTodos = await Pool.query(`SELECT * FROM todo`)
        res.status(200).json(allTodos.rows)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ error: 'Erros no servidor' });
    }
}

//erro de "x" is not a function aqui

/*
const createTodo = async (req,res) => {
    console.log(req.body)
    const data = req.body;
    try {
        const databaseInstance = new database
        const result = databaseInstance({tableName: "todo"}).create(data)
        res.status(200).json(result.rows)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ error: 'Erro no servidor' });
    }
}
*/

//Codigo para criar funcional em baixo

const createTodo = async (req,res) => {
    console.log(req.body)
    const data = req.body;
    try {
        const databaseInstance = database()
        const result = databaseInstance.create(data)
        res.status(200).json(result.rows)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ error: 'Erro no servidor' });
    }
}


const editTodo = async(req,res) => {
    const { id } = req.body;
    try {
 //       const result = await Pool.query("UPDATE users SET id = $3 RETURNING *",
  //      [id]
   //     );
        res.status(200).json(result.rows)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ error: 'Erro no servidor' });
    }
}

const deleteTodo = async(req,res) => {
        const { id } = req.body;
    try {
  //      const result = await Pool.query("DELETE FROM todo WHERE id=$1 RETURNING *",
  //      [id]
  //      );
        res.status(200).json(result.rows)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ error: 'Erro no servidor' });
    }
}


module.exports = {
    allTodos,
    createTodo,
    editTodo,
    deleteTodo
}