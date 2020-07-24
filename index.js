const express = require("express")
const app = express()

const PORT = 8080

// setting ejs as our template engine
app.set("view engine", "ejs")
// Tell Node.js where is our static files
app.use(express.static(__dirname + "/public"))

//Configure homepage route
app.get("/", async (req, res) => {
  res.render("pages/index", { message: "Sa K'ap Fèt StudHackers" })
})

app.listen(PORT, () => {
  console.log("Visit http://localhost:8080/ in your browser to see this app")
})
