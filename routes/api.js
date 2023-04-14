const intentMaker = require("../helpers/intentMaker");
const unique = require("short-unique-id");
const db = require("../database/db");
const express = require("express");

const id = new unique({ length: 7 });
const router = express.Router();

router.use(express.json());

router.post('/', async (req, res) => {
  try {
    let intentData = intentMaker(req.body.url);
    console.log(intentData)
    let { appName, key } = await db.put({ key: id(), views: 1, ...intentData })
    res.json({ error: false, message: "success", appName, key });
  } catch (error) {
    res.send({ error, message: "internal server error" })
  }
})

module.exports = router;
