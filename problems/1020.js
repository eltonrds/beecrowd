export function problem(lines) {
// lê um valor inteiro correspondente à idade em dias
    const idadeEmDias = parseInt(lines[0]);

// calcula a idade em anos, meses e dias
    const anos = Math.floor(idadeEmDias / 365);
    const meses = Math.floor((idadeEmDias % 365) / 30);
    const dias = idadeEmDias % 30;

// escreve a idade em anos, meses e dias
    console.log(anos + " ano (s)");
    console.log(meses + " mes (es)");
    console.log(dias + " dia (s)");

  }
  



