var soap = require('soap');
var url =
    'https://apps.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente?wsdl';

soap.createClient(url, function (err, res) {
    // console.log(
    //     'DESCREVE -->',
    //     res.describe().AtendeClienteService.AtendeClientePort
    // );

    res.consultaCEP({ cep: '04313090' }, function (err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log(result.consultaCEPResponse);
        }
    });
});
