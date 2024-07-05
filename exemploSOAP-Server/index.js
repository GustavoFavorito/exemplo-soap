const soap = require('soap');
const express = require('express');
const fs = require('fs');
const PORT = 8001;

const app = express();

var myService = {
    ws: {
        calc: {
            somar: function (args) {
                var n = args.a + args.b;
                return { sumres: n };
            },
            multiplicar: function (args) {
                var n = args.a * args.b;
                return { mulres: n };
            },
        },
    },
};

const xml = fs.readFileSync('wscalc.wsdl', 'utf-8');

app.listen(PORT, function () {
    soap.listen(app, '/wscalc', myService, xml, function () {
        console.log('server initialized', PORT);
    });
});
