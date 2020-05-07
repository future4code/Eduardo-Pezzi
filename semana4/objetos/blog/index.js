objetoPost = {
        
    titulo: "",
    autor:"",
    conteudo: "" 
}

let publicacao = [];

function pegaValores(){

    let titulo = objetoPost.titulo = document.getElementById('titulo').value;
    let autor = objetoPost.autor = document.getElementById('autor').value;
    let conteudo = objetoPost.conteudo = document.getElementById('conteudo').value;


    if (titulo && autor && conteudo != "") {

        publicacao.push(titulo, autor, conteudo);
    }

}


console.log(publicacao)