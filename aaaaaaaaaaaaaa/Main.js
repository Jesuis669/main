const form = document.getElementById("form_atividade")

let linhas = ""


form.addEventListener("submit", function(e){
    e.preventDefault()

    const inputNomeAtividade = document.getElementById("nome_atividade")
    const inputNotaAtividade = document.getElementById("nota_atividade")

    // alert(Atividade: ${inputNomeAtividade.value}\nNota: ${inputNotaAtividade.value})

    let linha = "<tr>"
    linha += `<td>${inputNomeAtividade.value}</td>`
    linha += `<td>${inputNotaAtividade.value}</td>`
    linha += `<td>${inputNotaAtividade.value >=7 ? "Aprovado" : "Reprovado"}</td>`
    linha += "</tr>"
    linhas += linha

    const corpoTabela = document.querySelector("tbody")
    corpoTabela.innerHTML = linhas

    inputNomeAtividade.value = ""
    inputNotaAtividade.value = ""
})