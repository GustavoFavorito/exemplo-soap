const soap = require('soap');
const url = 'http://localhost:8001/wscalc?wsdl';

soap.createClient(url, function (err, client) {
    if (err) throw err;

    // console.log(res.describe().ws.calc);

    client.somar({ a: 2, b: 2 }, function (err, res) {
        if (err) throw err;
        console.log(res);
    });

    client.multiplicar({ a: 2, b: 2 }, function (err, res) {
        if (err) throw err;
        console.log(res);
    });
});
