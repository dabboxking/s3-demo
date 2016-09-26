const AWS = require('aws-sdk');
const port = process.env.PORT;
const bucket = process.env.S3_BUCKET;
const awsAccessKetId = process.env.AWS_ACCESS_KEY_ID;
const awsSecretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

var s3 = new AWS.S3();

module.exports = {
  awsAccessKetId: awsAccessKetId,
  awsSecretAccessKey: awsSecretAccessKey,
  bucket : bucket,
  s3: s3,
  port :  port
};
