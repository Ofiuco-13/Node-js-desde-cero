const matematica = {};

function sumar(numero1, numero2) {
  return numero1 + numero2;
}

function restar(numero1, numero2) {
  return numero1 - numero2;
}

function multiplicar(numero1, numero2) {
  return numero1 * numero2;
}

function dividir(numero1, numero2) {
  if (numero2 === 0) {
    console.log("No se puede dividir por 0");
  } else {
    return numero1 / numero2;
  }
}

matematica.sumar = sumar;
matematica.restar = restar;
matematica.multiplicar = multiplicar;
matematica.dividir = dividir;

module.exports = matematica;
