const express = require("express");
const SqlService = require("/../services/sqlService");
const router = express.Router();


router.post('/post-Professor', async (req, res) => {
  const { Profesor_id, Professor_Name, Professor_Email, Professor_Category, Profesorr_State} = req.body;

  if (Profesor_id, Professor_Name, Professor_Email, Professor_Category, Profesorr_State) {
    return res.status(400).send("Missing fields.");
  }

  const db = new SqlService();
  const tableName = "Professor";
  try {
    
    if (id_homes) {
      await db.query(
        `INSERT INTO ${tableName} (Profesor_id, Professor_Name, Professor_Email, Professor_Category, Profesorr_State) VALUES (?, ?, ?, ?, ?)`,
        [Profesor_id, Professor_Name, Professor_Email, Professor_Category, Profesorr_State]
      );
    } else {
      const result = await db.query(
        `INSERT INTO ${tableName} (Profesor_id, Professor_Name, Professor_Email, Professor_Category, Profesorr_State) VALUES (?, ?, ?, ?, ?)`,
        [Profesor_id, Professor_Name, Professor_Email, Professor_Category, Profesorr_State]
      );
    }
    res.status(201).send("profesor creado");
  } catch (err) {
    console.error("SQL error:", err);
    res.status(500).send("Error .");
  } finally {
    await db.closeConnection();
  }
});

router.get('/get-all-Professor', async (req, res) => {
  const db = new SqlService();
  const tableName = "Professor ";
  try {
    const data = await db.query(`SELECT * FROM ${tableName}`);
    res.status(200).json(data);
  } catch (err) {
    console.error("SQL error:", err);
    res.status(500).send("Error fetching homes.");
  } finally {
    await db.closeConnection();
  }
});
