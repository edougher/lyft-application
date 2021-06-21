const fetch = require("node-fetch");

const body = { string: "secondTestfewfffvrv23rrever" };

const reqObj = {
   method: "post",
   body: JSON.stringify(body),
   headers: { "Content-Type": "application/json" },
 };

fetch('http://localhost:9000/test', reqObj)
    .then(res => res.json())
    .then(text => console.log(text))