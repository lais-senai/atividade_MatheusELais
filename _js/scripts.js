function comprar() {
    let tamanho = document.getElementById("tamanho").value;
    let formaPag = document.getElementById("formaPag").value;

    let valor = 0;
    let tarifa = 0;

    switch (tamanho) {
        case "tamP":
            valor = 10.00;
            break;
        case "tamM":
            valor = 15.00;
            break;
        case "tamG":
            valor = 20.00;
            break;
        default:
            break;
    }

    switch (formaPag) {
        case "formaD":
            tarifa = 0;
            let usuarioPagou = Number(prompt("Digite quanto você vai pagar:"));
            if (usuarioPagou < valor) {
                let pagarResto = confirm("O valor inserido não paga o seu Superaçaijin :(\nFaltou: R$" + (valor - usuarioPagou) + "\nDeseja pagar o restante?");
                if (pagarResto == true) {
                    let pagamentoExtra = Number(prompt("Digite o valor restante ou uma quantia maior:\n" + "Falta: R$" + (valor - usuarioPagou)));
                    let totalPago = pagamentoExtra + usuarioPagou;
                    if (totalPago >= valor) {
                        alert("Seu troco foi de: R$" + (totalPago - valor));
                        alert("Obrigado por comprar na Superaçaijin, daqui 10 Minutos, você pode vir retirar seu pedido. \n R. Senai da Silva Roberto, 222");
                    } else {
                        alert("Faltou mais um tantinho meu patrão :( \n" + "Faltou R$" + (valor - totalPago) + " infelizmente vamos cancelar seu pedido, por-favor tente novamente.");
                    }
                } else {
                    alert("Que pena então não poderemos enviar o produto, tente novamente mais tarde...");
                }
            } else if (usuarioPagou == valor) {
                alert("Obrigado por comprar na Superaçaijin, Daqui 10 Minutos, você pode vir retirar seu pedido. \n R. Senai da Silva Roberto, 222");
            } else if (usuarioPagou > valor){
                alert("Obrigado por comprar na Superaçaijin, daqui 10 Minutos, você pode vir retirar seu pedido e pegar seu troco de R$"+(usuarioPagou-valor)+"\n R. Senai da Silva Roberto, 222");
            } else{
                alert("Nosso serviço está desabilitado temporariamente, por gentileza tente novamente mais tarde.")
            }
                break;
        case "formaC":
            tarifa = (valor * 0.05);
            valor = valor + tarifa;
            alert("Obrigado por comprar na Superaçaijin, valor pago: R$" + valor + "\n Daqui 10 Minutos, você pode vir retirar seu pedido. \n R. Senai da Silva Roberto, 222")
        default:
            break;
    }


}