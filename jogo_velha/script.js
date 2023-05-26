let vez = 1;
let fim = false;
function alternar(casa) {
  //------------------------------------------------------------
  const figura = `url('figura${vez}.jpg')`;
  const casa1 = document.getElementById(casa);
  let imagemFundo = casa1.style.backgroundImage;
  //------------------------------------------------------------
  if (imagemFundo === "" && !fim) {
    casa1.style.backgroundImage = figura;
    fim = verificar();
    if (fim) {
      alert(`O jogador ${vez} venceu`);
    } else {
      vez = vez === 1 ? 2 : 1;
    }
  } else if(fim) {
    let reinicia = confirm("Reinicia?");
    if(reinicia) {
      reiniciar();
    } 
  }
}

function casasIguais(a, b, c) {
  //------------------------------------------------------------
  const casaA = document.getElementById(`casa${a}`);
  const casaB = document.getElementById(`casa${b}`);
  const casaC = document.getElementById(`casa${c}`);
  //------------------------------------------------------------
  const fundoA = casaA.style.backgroundImage;
  const fundoB = casaB.style.backgroundImage;
  const fundoC = casaC.style.backgroundImage;
  //------------------------------------------------------------
  if (fundoA === fundoB && fundoB === fundoC && fundoA != "") {
    return true;
  } else {
    return false;
  }
}

function verificar() {
  if (casasIguais(1, 2, 3) ||  //linha de cima
    casasIguais(4, 5, 6) ||    //linha do meio
    casasIguais(7, 8, 9) ||    //linha de baixo
    casasIguais(1, 4, 7) ||    //vertical da esquerda
    casasIguais(2, 5, 8) ||    //vertical do meio
    casasIguais(3, 6, 9) ||    //vertical da direita
    casasIguais(1, 5, 9) ||    //diagonal de cima para baixo
    casasIguais(3, 5, 7)) {    //diagonal de baixo para cima
    return true;
  } else {
    return false;
  }
}

function reiniciar() {
  let num = 1;
  while(num <= 9) {
    let casa = document.getElementById(`casa${num}`);
    casa.style.backgroundImage = "";
    num++;
  }
  vez = 1;
  fim = false;  
}