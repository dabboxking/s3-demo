# S3 Demo
<p>Demonstrating direct upload to s3. Full guide below.</p>
<p><a href="https://devcenter.heroku.com/articles/s3-upload-node" target="_blank" title="Direct to S3 File Uploads in Node.js">Direct to S3 File Uploads in Node.js</a> </p>

## Getting Started
$ git clone https://github.com/dabboxking/s3-demo.git

<p>Service Setup</p>
```bash
$ cd imager-service
```
<p>Add a .env file in the directory with the following variables</p>
```bash
PORT=3030
S3_BUCKET=[your s3 bukcet name]
AWS_ACCESS_KEY_ID=[your aws access key id]
AWS_SECRET_ACCESS_KEY=[your aws secret access key]
```
<p>Running the service</p>
```bash
$ npm install
$ npm run dev
```
<p>Client Setup</p>
```bash
$ cd imager-client
```
<p>Add a .env file in the directory with the following variable</p>
```bash
PORT=3000
```
<p>Running the service</p>
```bash
$ npm install
$ npm start
```
<p>Open browser to http://localhost:3000</p>
