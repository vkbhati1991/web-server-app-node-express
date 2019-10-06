const chalk = require("chalk");
const path = require("path");
const hbs = require("hbs");
const express = require("express");


//initialize express app
const app = express();

//Define PATH for express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewPath = path.join(__dirname, "../templates/views");
const partialPath = path.join(__dirname, "../templates/partials");


//Setup handlerbars and view Path
app.set("view engine", "hbs");
app.set("views", viewPath);
hbs.registerPartials(partialPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get("/", (req, res) => {
    res.render("index", {
        title: "Home page title",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
        footer: "Created By Vinod Singh EC965 CrmNext On 10/06/2019 in Noida"
    });
});

app.get("/about", (req, res) => {
    res.render("about", {
        title: "about page title",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
        footer: "Created By Vinod Singh EC965 CrmNext On 10/06/2019 in Noida"
    });
});

app.get("/help", (req, res) => {
    res.render("help", {
        title: "help page title",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
        footer: "Created By Vinod Singh EC965 CrmNext On 10/06/2019 in Noida"
    });
});

app.get("/weather", (req, res) => {
    res.render("weather", {
        title: "weather page title",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
        footer: "Created By Vinod Singh EC965 CrmNext On 10/06/2019 in Noida"
    });
});

app.get("*", (req, res)=>{
    res.render("404",{
        title: "Error 404",
        desc: "Please Use correct Url"
    })
})

app.listen(7777, () => {
    console.log(chalk.green.inverse.bold("App is running on PORT http://localhost:7777"))
});