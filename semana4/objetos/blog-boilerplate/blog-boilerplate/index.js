
let blogTitulo = document.getElementById("titulo-post")
let blogAutor = document.getElementById("autor-post")
let blogConteudo = document.getElementById("conteudo-post")

let form = []


const criacao = () => {

    // criação do meu objeto blog

    const blog = {

        titulo: blogTitulo,
        autor: blogAutor,
        conteudo: blogConteudo
    }

    // criação da minha matriz
    form.push(blog)
    //console.log(typeof (form))

    if (blog.titulo !== "" && blog.autor !== "" && blog.conteudo !== "") {
        // imprimindo no HTML
        let localImpressao = document.getElementById("container-de-posts")
        localImpressao.innerHTML += `<p>${blog.titulo.value}</p> <p>${blog.autor.value}</p> <p>${blog.conteudo.value}<p>`
        limpaCampos()
    } else {
        alert("Preencha todos os campos!!")
    }


}

const apertouEnter = (event) => {
    if (event.key === 'Enter') {
        criacao()

    }
}


function limpaCampos() {
    blogTitulo.value = ""
    blogAutor.value = ""
    blogConteudo.value = ""
}

