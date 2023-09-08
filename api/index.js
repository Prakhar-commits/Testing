const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const user_id = "tanish_khare_08012002";
const email = "tk8351@srmist.edu.in";
const roll_number = "RA2011030030004";

app.post("/bfhl", (req, res) => {
  const data = req.body.data || [];
  const numbers = [];
  const alphabets = [];

  data.forEach((item) => {
    if (!isNaN(item)) {
      numbers.push(item);
    } else {
      alphabets.push(item.toUpperCase());
    }
  });

  const highest_alphabet = alphabets.sort().pop() || null;

  res.json({
    is_success: true,
    user_id,
    email,
    roll_number,
    numbers,
    alphabets,
    highest_alphabet: highest_alphabet ? [highest_alphabet] : [],
  });
});

app.get("/bfhl", (req, res) => {
  res.status(200).json({
    operation_code: 1,
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
