// Dependencies
const express = require("express");
const mongojs = require("mongojs");
const request = require("request");
const cheerio = require("cheerio");
const cheerioTableParser = require("cheerio-tableparser");

// Initialize Express
const app = express();

// Database configuration
const databaseUrl = "LACE";
const collections = ["Bills"];

// Hook mongojs configuration to the db variable
const db = mongojs(databaseUrl, collections);
db.on("error", (error) => {
  console.log("Database Error:", error);
});

// Main route (simple Hello World Message)
app.get("/", (req, res) => {
  res.send("Hello world");
});


app.get("/scrape", (req, res) => {
  
  request("https://www.ola.org/en/legislative-business/bills/current", (error, response, html) => {
    
    let $ = cheerio.load(html);
    cheerioTableParser($)
    
    $(".views-row").each(function(i, element) {
      
      
      let title = $(element).find("h2").text();
      let URL = $(element).find("a").attr("href");
      let MPP = $(element).find("p").text();
      let data = $(element).parsetable(false, false, true);
  
      // let date = $(element).find("td").eq(0).text()
      // let billStage = $(element).find("td").eq(1).text()
      // let activity =  $(element).find("td").eq(2).text()
      // let committee =  $(element).find("td").eq(3).text()
      
      // If this found element had both a title and a link
      if (title && URL) {
        // Insert the data in the scrapedData db
        db.scrapedData.insert({
          title, URL, MPP, data
          // date, billStage, activity, committee
        },
        (err, inserted) => {
          if (err) {
            // Log the error if one is encountered during the query
            console.log(err);
          }
          else {
            // Otherwise, log the inserted data
            console.log(inserted)
          }
        });
      }
    });
  });

  // Send a "Scrape Complete" message to the browser
  res.send("Scrape Complete");
});


// Listen on port 3000
app.listen(3000, () => {
  console.log("App running on port 3000!");
});
