//Lyft test route
var express = require("express");
var router = express.Router();

// Return
function cutString(str, func) {
  const regexStr = func(str);
  let cutString = "";
  for (var i = 2; i < regexStr.length; i += 3) {
    cutString += regexStr[i];
  }
  return cutString;
}

// Get rid of all non-alphabetical 
function cleanUp(str) {
  var re = /[^a-zA-Z]+/g;
  let regexString = str.replace(re, "");
  return regexString;
}
//
router.post("/", function (req, res, next) {
  const stringToCut = req.body.string;
  //res.send({ "return_string": "hello world" })
  res.status(200).json({ return_string: cutString(stringToCut, cleanUp) });
});

module.exports = router;
