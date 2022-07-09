// Crie um objeto que receba ao menos três propriedades sobre você.

let sobreMim = {
  nome: "Luccas",
  profissão: "estudante",
  idade: 20

}

// Adicione uma nova propriedade sem alterar seu objeto inicial.

 sobreMim.time = "Grêmio";
 console.log(sobreMim);

// Remova uma propriedade desse objeto.

 delete sobreMim.idade;
console.log(sobreMim);

//Mostre no console todas as propriedades desse objeto.

console.log(sobreMim);

// Crie um array  chamado "cadastro" contendo ao menos 5 objetos.
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//Na propriedade amigos, adicione ao menos 4 itens.

 const cadastro = [
    {
         nome: "Luccas",
         idade: 20,
        telefone: 2131231,
         amigos: ["Marianne", "Livia", "Felipe", "Marlos"]
     }, 
     {
         nome: "Marianne",
         idade: 18,
        telefone: 321313,
         amigos: ["Luis", "Kauã", "Leticia", "Louise"]
    }, 
     {
        nome: "Jhonatta",
        idade: 21,
         telefone: 2312313,
         amigos: ["Luccas", "Leticia", "Livia", "Marianne"]
     }, 
    {
         nome: "Fabricyo",
         idade: 23,
         telefone: 3141242,
         amigos: ["Gabriel", "Raphael", "Matheus", "Guilherme"]
     }, 
     {
       nome: "Gabriel",
        idade: 22,
        telefone: 123131,
        amigos: ["Daniel", "Cosme", "Luan", "Mari"]
     },
 ];

 console.log(cadastro[0].amigos[0]);
 console.log(cadastro[1].amigos[0]);
 console.log(cadastro[2].amigos[0]);
 console.log(cadastro[3].amigos[0]);
 console.log(cadastro[4].amigos[0]);
 console.log(cadastro[5].amigos[0]);


 for(let contador = 0; contador < cadastro.length; contador++){
     const resultado = cadastro[contador].amigos[0]
     console.log("Feito com o for:", resultado)
 }