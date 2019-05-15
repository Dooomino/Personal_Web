var express = require('express');
var app = new express();
var path = require('path');

var languageList = {
  'en-us': 'views/en/index.html',
  'zh': 'views/zh/index.html'
}

try {
  app.use(express.static(__dirname));

  app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
  });
} catch (e) {

}
app.get("/lang", function (req, res) {
  try {
    var lang = req.headers["accept-language"];
    lang = lang.split(',')[0].toLowerCase();
    console.log(lang);

    if (languageList[lang] != undefined) {
      //    res.sendFile(__dirname + '/' + languageList[lang]);
      res.send('/' + languageList[lang]);
    } else {
      //    res.sendFile(__dirname + '/' + languageList['en-us']);
      res.send('/' + languageList['en-us']);
    }

  } catch (e) {

  }
});

try {
  var demoPort = 16075;
  console.log("Demo listing at port:", demoPort);
  app.listen(demoPort);
} catch (e) {

}
