const calcularSalario = (horas, salarioHora) => {
    return `Seu salário é R$ ${horas * salarioHora}`
}

console.log(calcularSalario(150, 40.5))