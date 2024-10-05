
function hero (nome, idade, tipo){
    this.nome = nome,
    this.idade = idade,
    this.tipo = tipo
    
     console.log(`Olá ${this.nome}`);
    
    this.atacar = function() {
     let ataque;
     switch (this.tipo) {
     case "mago":
     ataque = "magia";
     break;
     case "guerreiro":
     ataque = "espada";
     break;
     case "monge":
     ataque = "artes marciais";
     break;
     case "ninja":
     ataque = "shuriken";
     break;
     }
     
     console.log(`O ${this.tipo} atacacou usando ${ataque}`)
    };
   
   }
    const heroi = new hero("Ela7", 29, "monge");
    heroi.atacar();