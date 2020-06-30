
const materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
  ];

console.log('Script 2 carregado');

//const soma = (number1, number2) => {
//  return number1 + number2;  
//}

const soma = (number1, number2) => number1 + number2;
  



function displayData(){
    console.log('Botao clicado');
    console.log(materials);
    console.log(materials.length);
    console.log(soma(2,3));
}

