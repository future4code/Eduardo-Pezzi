let newArray = [];

function cadastrarDespesa() {
    
    event.preventDefault();

    let valor = document.getElementById("psvalor").value;
    let tipoDespesa = document.getElementById("opcoes").value;
    let descricao = document.getElementById("descricao").value;

    const psdespesa = {

        valor: valor,
        despesa: tipoDespesa,
        descricao: descricao,
    }

    if (valor || tipoDespesa || descricao == "") {

        console.log("Preencha todos os campos")
    
    } else {

        newArray.push(valor, tipoDespesa, descricao)
        console.log(newArray)
    } 

}