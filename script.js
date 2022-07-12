let frutasArray = ["maça", "banana", "uva", "kiwi", "morango"];
console.log(frutasArray);

// adiciona no inicio => unshift
frutasArray.unshift("goiaba");
console.log(frutasArray);

// remove o ultimo elemento => pop
frutasArray.pop();
console.log(frutasArray);

// adicionar ao final => push
let itemsComida = ["arroz", "feijão"];
itemsComida.push("carne", "salada");
console.log(itemsComida);

// remove o primeiro elemento =>shift
itemsComida.shift()
console.log(itemsComida)

// sort => ordenar cresc/desc
let numbers = [7, 5, 6, 3, 8, 9, 2, 1, 4]
numbers.sort(function (a, b) {
    return (a - b)
})
console.log(numbers)