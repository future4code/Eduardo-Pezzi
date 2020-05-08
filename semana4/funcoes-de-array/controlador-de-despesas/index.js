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

    if (valor == "" || tipoDespesa == "" || descricao == "") {

        alert("Por favor, preencha todos os campos")
    
    } else {

        newArray.push(valor, tipoDespesa, descricao)
        console.log(newArray)
    } 

}

function detalhaDespesa() {

    let 

    newArray.filter((valor, index, array) => {

        
    })


}