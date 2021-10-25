const {Config} = require('./src/Config.js');
const express = require("express");
var https = require('https');
var http = require('http');
var fs = require('fs');
const path = require('path');
const app = express();
const cors = require('cors');

const PORT = process.env.PORT || 3001;
// Load the Snowflake Node.js driver.
var snowflake = require('snowflake-sdk');
snowflake.configure({loglevel:'trace',clientSessionKeepAlive:true});

// Create a Connection object that we can use later to connect.
var connection = snowflake.createConnection( {
  account: Config.account,
  username: Config.username,
  password: Config.password,
  database:Config.database,
  role: Config.role,
  warehouse: Config.warehouse,
  clientSessionKeepAlive:true
  }
  );

  // Try to connect to Snowflake, and check whether the connection was successful.
connection.connect( 
  function(err, conn) {
      if (err) {
          console.error('Unable to connect: ' + err.message);
          } 
      else {
          console.log('Successfully connected to Snowflake.');
          // Optional: store the connection ID.
          connection_ID = conn.getId();
          }
      }
  );

  app.get('/productionUnit',cors(),function (req, res) {
  // connection.execute({
   // // sqlText: 'select * from "SAMPLEDB"."PUBLIC"."SAMPLETABLE"',
   // sqlText: Config.fetchtdata,
    // streamResult: true,
    // complete: function(err, stmt, rows) {
      // // no rows returned inline because streamResult was set to true
      // console.log('rows: ' + rows); // 'rows: undefined'
  
      // // only consume at most the last 5 rows in the result
      // rows = [];
      // stmt.streamRows()
      // .on('error', function(err) {
        // console.error('Unable to consume requested rows');
      // })
      // .on('data', function(row) {
        // rows.push(row);
        // console.log("data->",row)
      // })
      // .on('end', function() {
        // console.log('Number of rows consumed: ' + rows.length);
        // res.send(rows)
      // });
    // }
  // });
  
 var statement = connection.execute({
  sqlText: Config.fetchtdata
});
var rows = [];
var stream = statement.streamRows();

stream.on('error', function(err) {
  console.error('Unable to consume all rows');
});

stream.on('data', function(row) {
  // consume result row...
  rows.push(row)
});

stream.on('end', function() {
  
 res.send(rows);
 console.log('All rows consumed',rows[1]);
});
})


var server = app.listen(PORT, function () {
    console.log('Server is running..');
});
  
// app.listen(PORT, () => {
//   console.log(`Server listening on ${PORT}`);
// });

const ca = [];
let chain = fs.readFileSync(Config.SSL_CHAINKEY,'utf-8');
chain = chain.split("\n");
let cert = [];
for (let line of Array.from(chain)) {
  if (line.length !== 0) {
    cert.push(line);
    if (line.match("-----END CERTIFICATE-----")) {
      ca.push(cert.join("\n"));
      cert = [];
    }
  }
}

//const port = 3000
const httpsPort = 8443
// This line is from the Node.js HTTPS documentation.
var options = {
  ca: ca,
  key: fs.readFileSync(Config.SSL_KEY),
  cert: fs.readFileSync(Config.SSL_CRT),
  rejectUnauthorized: false,
  requestCert: false
};

// This application level middleware prints incoming requests to the servers console, useful to see incoming requests
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    console.log(`Request_Endpoint: ${req.method} ${req.url}`);
    next();
});
// Configure the CORs middleware
app.use(cors({
  origin: '*'
}));

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

//app.listen(port, () => console.log(`BACK_END_SERVICE_PORT: ${port}`));
// Create an HTTP service.
//http.createServer(app).listen(port,() => console.log(`Http app service started on port: ${port}`));
https.createServer(options, app).listen(httpsPort,() => console.log(`Https app service started on port: ${httpsPort}`));
// app.listen(9000);