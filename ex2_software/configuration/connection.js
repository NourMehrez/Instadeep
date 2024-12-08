var Connection = require('tedious').Connection;
var config = {
    server: 'your_server.database.windows.net',
    authentication: {
        type: 'default',
        options: {
            userName: 'root',
            password: ''
        }
    },
    options: {

        encrypt: true,
        database: 'Instadeep'
    }
};
var connection = new Connection(config);
connection.on('connect', function(err) {

    console.log("Connected");
});

connection.connect();