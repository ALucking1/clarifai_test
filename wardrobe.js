var Clarifai = require('clarifai');

var app = new Clarifai.App(
  'r02-s-7CIsMAJlzT0ukvERC76TdUeQhrRgmvKwf5',
  '8NCeSBGoor-_dlO31H4141jdwDO-TIduPfw6hwxq'
);

app.models.predict(Clarifai.GENERAL_MODEL, 'https://Users/annalucking/Desktop/dress.jpg').then(
  function(response) {
    console.log(response);
  },
  function(err) {
    console.error(err);
  }
);
