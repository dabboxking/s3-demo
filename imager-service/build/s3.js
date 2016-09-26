/*eslint no-console:0 */
//      
'use strict';

var config = require('../config');

function upload(req       , res       ) {
  var bucket = config.bucket;
  var s3 = config.s3;
  var fileName = req.query['file-name'];
  var fileType = req.query['file-type'];

  console.log('fileName: ' + fileName + ' fileType' + fileType);

  var s3Params = {
    Bucket: bucket,
    Key: fileName,
    Expires: 60,
    ContentType: fileType,
    ACL: 'public-read'
  };

  s3.getSignedUrl('putObject', s3Params, (err, data) => {
    if(err){
      console.log(err);
      return res.end();
    }
    var returnData = {
      signedRequest: data,
      url: `https://${bucket}.s3.amazonaws.com/${fileName}`
    };
    res.write(JSON.stringify(returnData));
    res.end();
  });
}

function saveDetails(req       , res       ) {
    // TODO: Read POSTed form data and do something useful
}

module.exports = {
  upload : upload,
  saveDetails: saveDetails
};
