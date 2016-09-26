# S3 Demo
<p>Demonstrating direct upload to s3. Full guide below</p>
<p><a href="https://devcenter.heroku.com/articles/s3-upload-node" target="_blank" title="Direct to S3 File Uploads in Node.js">Direct to S3 File Uploads in Node.js</a> </p>

## Getting Started
$ git clone [repo]

<p>Client Setup</p>
$ cd [repo]/imager-client
add .env file in dir
add the following:
add PORT=3000
$ npm install
$ npm start
<p>Open browser to http://localhost:3000</p>

<p>Service Setup</p>
$ cd [repo]/imager-service
add .env file in dir
add the following:
PORT=3030
S3_BUCKET=[your s3 bukcet name]
AWS_ACCESS_KEY_ID=[your aws access key id]
AWS_SECRET_ACCESS_KEY=[your aws secret access key]
$ npm install
$ npm run dev
