-- const getAll = (req,res) => {
--    pool.query("SELECT * FROM users", (err, result) => {
--        if(err) {
--            throw err;
--        }

--        res.status(200).json(result.rows);
--    })
--}


CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    priority INT,
    completed BOOLEAN DEFAULT false,
    createdat TIMESTAMP DEFAULT NOW()
);

INSERT INTO tasks (title, priority) VALUES ('Minha primeira tarefa', 1);

SELECT * FROM tasks;

UPDATE tasks SET completed = true WHERE id = 1;

DELETE FROM tasks WHERE id = 1;