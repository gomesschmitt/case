/**
 * @module pg
 * Datenbankobjekt, welches die Standard Konnektorvariablen vom pg Modul aus der env zieht. Hier muss man starten, wenn man mehrere Datenbanken nutzen will. Am besten alle immer beim Start des Servers in ein Array schreiben.
 * */

const { Pool } = require('pg');
const options = {

    
        host: "localhost",
        port: 5432,
        database: "todo",
        user: "postgres",
        password: "wolf123456"
    }

// const monitor = require('pg-monitor');
// monitor.attach(options); // attach to all events at once;

// Environment variables used for pg configuration
exports.pg = new Pool(options);
// exports.pg = new Pool(options);

