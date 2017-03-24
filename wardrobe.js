var Clarifai = require('clarifai');

var app = new Clarifai.App(
  'r02-s-7CIsMAJlzT0ukvERC76TdUeQhrRgmvKwf5',
  '8NCeSBGoor-_dlO31H4141jdwDO-TIduPfw6hwxq'
);

app.models.predict(Clarifai.GENERAL_MODEL, 'http://www.cosstores.com/Content/CMSContent/campaigns/cos/2017/ten/images/products/09_organic_cotton_split_neckline_top_desktop-highres.jpg').then(
  function(response) {
    console.log(response.outputs);
  },
  function(err) {
    console.error(err);
  }
);
