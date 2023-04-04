
// //Obtenha o valor “Serviços” do array menu

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];


console.log(menuServices);

////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //Procure o índice do valor “Portfólio” do array menu

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu.indexOf("Portfólio");

console.log(indexOfPortfolio);

////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // //Adicione o valor “Contato” no final do array menu

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];

menu.push("Contato");

console.log(menu);

////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Utilize o for para imprimir os elementos da lista groceryList com o console.log():

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let index = 0; index < groceryList.length; index += 1) {
  let element = groceryList[index];

  console.log(element);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let index = 0; index < groceryList.length; index += 1) {

  console.log(groceryList[index]);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////

let numeros = [1,2,3,4,5];
for(let numero of numeros) {
  console.log(numero);
}

// resultado: 
//1
//2
//3
//4
//5

////////////////////////////////////////////////////////////////////////////////////////////////////////////

let word = 'Hello';
for (let letter of word) {
  console.log(letter);
}

// resultado:
// "H"
// "e"
// "l"
// "l"
// "o"

////////////////////////////////////////////////////////////////////////////////////////////////////////////

let arrOfNumbers = [10, 20, 30];
for (let sum of arrOfNumbers) {
  sum += 1;
  console.log(sum);
}

11
21
31

////////////////////////////////////////////////////////////////////////////////////////////////////////////

let names = ['João', 'Maria', 'Antônio', 'Margarida'];
for (let name of names) {

console.log(name);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////

let counter = 0;

while(counter !== 5) {
  counter += 1;
}



let dado1 = Math.ceil(Math.random() * 6);
console.log('resultado dado 1:', dado1);
let dado2 = Math.ceil(Math.random() * 6);

while (dado1 !== dado2) {
  dado2 = Math.ceil(Math.random() * 6);
  console.log('resultado dado 2:', dado2);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////


let fruits = [3, 4, 10, 1, 12];
let sum = 0;

for (let index = 0; index < fruits.length; index += 1) {
    sum += fruits[index];
}

if (sum > 15) {

    console.log(sum);
   
} else {
    console.log("valor menor que 16");
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////

let nomePessoa1 = "João";
let sobrenomePessoa1 = "Nascimento";
let nomePessoa2 = "Renan";
let sobrenomePessoa2 = "Fernandes";

// Gerando uma variável com nome e sobrenome juntos:
let nomeCompletoPessoa1 = nomePessoa1 + " " + sobrenomePessoa1;

console.log(nomeCompletoPessoa1);

////////////////////////////////////////////////////////////////////////////////////////////////////////////

let cars = ["Saab", "Volvo", "BMW"];

for (let index = 0; index < cars.length; index += 1) {
  console.log(cars[index]);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////

let pizzas = ['4 queijos', 'calabresa', 'frango com cheddar', 'romeu e julieta'];


pizzas.push("chocolate");
pizzas.push("churros");

let searchForpizzas = pizzas[pizzas.length - 1]


console.log(searchForpizzas);


 for  (let index = 0; index < pizzas.length; index += 1 ) {
    console.log(pizzas[index]);
 }

////////////////////////////////////////////////////////////////////////////////////////////////////////////

let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

console.log(tasksList.length);
//3

////////////////////////////////////////////////////////////////////////////////////////////////////////////

let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

let searchForFirstTask = tasksList[0];
console.log(searchForFirstTask);
//Tomar café


let searchForLastTask = tasksList[tasksList.length - 1];
console.log(searchForLastTask);
Brincar com o cachorro

////////////////////////////////////////////////////////////////////////////////////////////////////////////

let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

tasksList.push('Fazer exercícios da Trybe');  // adiciona mais uma tarefa
console.log(tasksList);

['Tomar café', 'Reunião', 'Brincar com o cachorro', 'Fazer exercícios da Trybe']

////////////////////////////////////////////////////////////////////////////////////////////////////////////

let pizzas = ['4 queijos', 'calabresa', 'frango com cheddar', 'romeu e julieta'];


pizzas.push("chocolate");
pizzas.push("churros");

pizzas.unshift("calabresa com cheddar");

pizzas.pop();
pizzas.shift();

let indexOfPizzas = pizzas.indexOf('frango com cheddar');

console.log(indexOfPizzas);

////////////////////////////////////////////////////////////////////////////////////////////////////////////

let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

tasksList.pop();  // remove a última tarefa
console.log(tasksList);

// [ 'Tomar café', 'Reunião' ]


let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

let indexOfTask = tasksList.indexOf('Reunião');
console.log(indexOfTask);

// 1

////////////////////////////////////////////////////////////////////////////////////////////////////////////

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;

for (let index = 0; index < numbers.length; index += 1) {
    result += numbers[index];
}

result = result / numbers.length;

if (result > 20) {
    console.log('Valor maior que 20');
} else {
    console.log('Valor menor ou igual a 20');
}

console.log(result);

////////////////////////////////////////////////////////////////////////////////////////////////////////////

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let higherNumber = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
    if(numbers[index] > higherNumber) {
        higherNumber = numbers[index];
    }
}

console.log(higherNumber);

////////////////////////////////////////////////////////////////////////////////////////////////////////////

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 !==0) {
        result += 1;
    }
}

if (result === 0) {
    console.log("nenhum valor impar encontrado")
} else {
    console.log(result);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let smallestNumber = numbers[0];

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < smallestNumber) {
        smallestNumber = numbers[index];
    }
}

console.log(smallestNumber);

////////////////////////////////////////////////////////////////////////////////////////////////////////////

let numbers = [];

for (let index = 1; index <=25; index += 1) {
    numbers.push(index);

for (let index = 0; index < numbers.length; index += 1){
    console.log(numbers[index] / 2);
}
};

console.log(numbers[index] / 2);

////////////////////////////////////////////////////////////////////////////////////////////////////////////

let fatorial = 1;

for (let index = 10; index > 0; index -= 1) {
    fatorial *= index;
}

console.log(fatorial);

////////////////////////////////////////////////////////////////////////////////////////////////////////////

let word = 'Edson Junior';

let reverseWord = '';

for (let index = 0; index < word.length; index += 1) {
    reverseWord += word[word.length - 1 - index];
}

console.log(reverseWord);

////////////////////////////////////////////////////////////////////////////////////////////////////////////

let word = 'tryber';
let reverseWord = '';

reverseWord = word.split('').reverse().join('');

console.log(reverseWord);

////////////////////////////////////////////////////////////////////////////////////////////////////////////

let array = ['java', 'javascript', 'python', 'html', 'css'];

let biggestWord = array[0];
let smallesWord = array[0];

for (let index = 1; index < array.length; index += 1){
    if (array[index].length > biggestWord.length) {
        biggestWord = array[index];
    }
}

for (let index = 1; index < array.length; index +=1) {
    if (array[index].length < smallesWord.length) {        
    }
}

console.log(biggestWord);
console.log(smallesWord);

////////////////////////////////////////////////////////////////////////////////////////////////////////////

let biggestPrimeNumer = 0;

for(let currentNumber = 2; currentNumber <= 50; currentNumber += 1) {
    let isPrime = true;
    for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor +=1) {
        if (currentNumber % currentDivisor === 0){
        isPrime = false;
    }
}

if (isPrime) {
    biggestPrimeNumer = currentNumber;
}
}

console.log(biggestPrimeNumer);

////////////////////////////////////////////////////////////////////////////////////////////////////////////

 let biggestPrimeNumer = 0;

 for (let currentNumber = 50; currentNumber >= 2; currentNumber -= 1) {
    let isPrime = true;
    for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
        if (currentNumber % currentDivisor === 0) {
        isPrime = false;
    }
 }
 if (isPrime) {
    biggestPrimeNumer = currentNumber;
    break; // O break finaliza a execução do laço de For
 }
}

console.log(biggestPrimeNumer);

////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Exercicio bônus ordenação Bubble sort.

////////////////////////////////////////////////

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index =1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
        if (numbers[index] < numbers[secondIndex]) {
            let position = numbers[index];
            numbers[index] = numbers[secondIndex];
            numbers[secondIndex] = position;
        }
    }
}

console.log(numbers);

///////////////////////////////////////////////////////////////////////////////////

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index =1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
        if (numbers[index] > numbers[secondIndex]) {
            let position = numbers[index];
            numbers[index] = numbers[secondIndex];
            numbers[secondIndex] = position;
        }
    }
}

console.log(numbers);

///////////////////////////////////////////////////////////////////////////////////

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newArray = [];

for (let index = 0; index < numbers.length; index +=1) {
    if (index < (numbers.length - 1)) { // se não é o último
        newArray.push(numbers[index] * numbers[index + 1]);
    } else {
        newArray.push(numbers[index] * 2);
    }
}

console.log(newArray);

///////////////////////////////////////////////////////////////////////////////////

// Agora, trabalhe com algumas formas geométricas! Utilize a estrutura de repetição for para escrever os códigos a seguir.

// Escreva um algoritmo que, dado um valor n positivo, ou seja, n > 1, imprima na tela um quadrado feito de asteriscos de tamanho n.

let n = 5;
let symbol = "*";
let inputLine = '';

for (let lindeIndex = 0; lindeIndex < n; lindeIndex += 1) {
    inputLine = inputLine + symbol;
};
for (let lindeIndex = 0; lindeIndex < n; lindeIndex += 1){
    console.log(inputLine);
};

///////////////////////////////////////////////////////////////////////////////////

//Faça o mesmo algoritmo que antes, mas de modo que imprima um triângulo retângulo com 5 asteriscos de base.

let size = 5;
let symbol = "*";
let inputLine = '';

for (let lindeIndex = 0; lindeIndex <= size; lindeIndex += 1){
    console.log(inputLine);
    inputLine = inputLine + symbol;
};

///////////////////////////////////////////////////////////////////////////////////

//Agora, inverta o lado do triângulo.

let n = 5;
let symbol = '*';
let inputLine = '';
let inputPosition = n -1;

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
    for (let columnIndex = 0; columnIndex < n; columnIndex += 1) {
        if (columnIndex < inputPosition) {
            inputLine = inputLine + ' ';
        } else {
            inputLine = inputLine + symbol;
        }
    }
    console.log(inputLine);
    inputLine = '';
    inputPosition -= 1;
};

///////////////////////////////////////////////////////////////////////////////////

//Depois, faça uma pirâmide com n asteriscos de base.

let n = 5;
let symbol = '*';
let inputLine = '';

let midOfMatrix = (n + 1) / 2;
let controlLeft = midOfMatrix;
let controlRight = midOfMatrix;

for (let lineIndex = 0; lineIndex <= midOfMatrix; lineIndex +=1) {
    for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
      if (columnIndex > controlLeft && columnIndex < controlRight) {
        inputLine = inputLine + symbol;
      } else {
        inputLine = inputLine + ' ';
      }
    }
    console.log(inputLine);
    inputLine = '';
    controlRight += 1;
    controlLeft -= 1
};

///////////////////////////////////////////////////////////////////////////////////

//Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Para isso, assuma que o valor de n será sempre ímpar.

let n = 7;
let middle = (n + 1) / 2;
let controlLeft = middle;
let controlRight = middle;
let symbol = '*';

for(let line = 1; line <= middle; line += 1) {
  let outputLine = '';
  for (let col = 1; col <= n; col += 1) {
    if (col == controlLeft || col == controlRight || line == middle) {
      outputLine += symbol;
    } else {
      outputLine += ' ';
    }
  } 
  controlLeft -= 1;
  controlRight += 1;
  console.log(outputLine);
}
