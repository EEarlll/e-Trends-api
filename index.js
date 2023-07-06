const express = require("express");
const googleTrends = require("google-trends-api");
const cors = require("cors");

const startTime = new Date();
const endTime = new Date();
endTime.setFullYear(startTime.getFullYear() - 1);

const app = express();
app.use(cors());

const category = {
  philippines: 0,
  Vehicles: 47,
  Books: 22,
  "Computer and Technologies": 5,
  Finance: 7,
  Games: 8,
  Health: 45,
  "Internet and Telecom": 13,
  News: 16,
  Property: 29,
  Shopping: 18,
  Travel: 67,
};

app.get("/api/interestOverTime", (req, res) => {
  const ids = req.query.ids ? req.query.ids.split(",") : [];
  const user_category = category[ids[0]];
  const user_keyword = ids[1];

  googleTrends
    .interestOverTime({
      keyword: user_keyword,
      startTime: startTime,
      endTime: endTime,
      category: user_category,
    })
    .then(function (result) {
      const parsedResult = JSON.parse(result);
      res.json(parsedResult);
    })
    .catch(function (error) {
      console.error(error);
    });
});

app.get("/api/relatedTopics", (req, res) => {
  const ids = req.query.ids ? req.query.ids.split(",") : [];
  const user_category = category[ids[0]];
  const user_keyword = ids[1];

  googleTrends
    .interestOverTime({
      keyword: user_keyword,
      startTime: startTime,
      endTime: endTime,
      category: user_category,
    })
    .then(function (result) {
      const parsedResult = JSON.parse(result);
      res.json(parsedResult);
    })
    .catch(function (error) {
      console.error(error);
    });
});

app.listen(5000, () => {
  console.log("server started on port 5000");
});
