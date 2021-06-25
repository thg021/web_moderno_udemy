const nomeDoMes = (mes) => {
    const nome = ["", "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

    return nome[mes]
}

console.log(nomeDoMes(2))