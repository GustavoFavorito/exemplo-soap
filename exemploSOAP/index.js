var soap = require('soap');
var url = 'http://www.dneonline.com/calculator.asmx?WSDL';

soap.createClient(url, function (err, client) {
    // console.log(
    //     'Descrever o WSDL',
    //     client.describe().Calculator.CalculatorSoap
    // );
    client.Add({intA: 1, intB: 2}, function(err, result){
        if (err) {
            console.log(err);
        } else {
            console.log(result.AddResult);
        }
    });
    client.Subtract({intA: 4, intB: 2}, function(err, result){
        if (err) {
            console.log(err);
        } else {
            console.log(result.SubtractResult);
        }
    });
    client.Divide({intA: 10, intB: 2}, function(err, result){
        if (err) {
            console.log(err);
        } else {
            console.log(result.DivideResult);
        }
    });
    client.Multiply({intA: 1, intB: 2}, function(err, result){
        if (err) {
            console.log(err);
        } else {
            console.log(result.MultiplyResult);
        }
    });
});
