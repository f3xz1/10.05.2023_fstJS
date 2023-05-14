let num = prompt("Введите трехзначное число:");

let fst = Number(num % 10);

let sec = Number(((num - fst) / 10) % 10);

let thrd = Number((num - fst - sec * 10) / 100);

alert("Число задом на перед:" + (fst * 100 + sec * 10 + thrd));
