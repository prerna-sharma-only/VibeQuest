import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.render("index.ejs");
});


app.post("/", async (req, res) => {
  try{
    const response = await axios.get(`https://bored-api.appbrewery.com/filter?type=${req.body.type}&participants=${req.body.participants}`);
    const number = Math.floor(Math.random()*response.data.length);
    const result = response.data[number];
    res.render("index.ejs", { result: result });
  }catch(error){
    console.error("Failed to make request:", error.message);
    res.render("solution.ejs", {
      error: "No activities that match your criteria.",
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});