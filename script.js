function myFunction() {
    var nome = prompt("Digite seu nome: ");
    console.log("Nome digitado:" + nome);

    var sobrenome = prompt("Digitado seu sobrenome");
    console.log("sobrenome digitado:" + sobrenome);

    var idade = prompt("Digita sua idade");
    console.log("Idade digitado:" + idade);

    var nacionalidade = prompt("Ditige sua nacionalidade: ");
    console.log("Nationalidade digitado: " + nacionalidade);

    var cor = prompt("Digite sua cor: ");
    console.log("cor digitado:" + nacionalidade);

    var sexo = prompt("Digite seu sexso: ");
    console.log("Sexo digitado: " + nacionalidade);

    var profissao = prompt("Digite sua profissao");
    console.log("Profissao digitado: " + profissao);
    console.table([nome, sobrenome, idade, nationalidade, cor, sexo, profissao]);

}



