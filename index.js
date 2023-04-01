const operatingSystem = require("./helpers/operatingSystem");
const db = require("./database/db");
const express = require("express");

const app = express();

app.set("view engine", "ejs");
app.use("/api", require("./routes/api"));
app.get("/", ({ res }) => { res.render("index"); })

app.get("/:key", async (req, res) => {
   try {
      const data = await db.get(req.params.key);
      await db.put({ ...data, views: parseInt(data.views) + 1 })
      res.redirect(data[`intent_${operatingSystem(req.headers["user-agent"])}`]);
   } catch (error) {
      res.render("error", { message: "Not Found" });
   }
});

app.listen(3000);
