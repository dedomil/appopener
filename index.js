const operatingSystem = require("./helpers/operatingSystem");
const db = require("./database/db");
const express = require("express");

const app = express();

app.set("view engine", "ejs");
app.use("/api", require("./routes/api"));
app.get("/", ({ res }) => { res.render("index"); })

app.get("/:key", async (req, res) => {
   try {
      let os = operatingSystem(req.headers["user-agent"]);
      const data = await db.get(req.params.key);
      await db.put({ ...data, views: parseInt(data.views) + 1 })
      if (os == "android" || os == "ios") {
         res.render("key", { data, os })
      } else {
         res.redirect(data[`intent_${os}`]);
      }
   } catch (error) {
      res.render("error", { message: "Not Found" });
   }
});

// app.listen(3000);
module.exports = app;
