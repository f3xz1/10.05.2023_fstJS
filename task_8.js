let money = parseFloat(prompt("Введите сумму ваших денег (float)"));

let chocolate_price = parseFloat(prompt("Введите цену шоколадки (float)"));

alert("Вы кулили: " + parseInt(money / chocolate_price) + " шоколадок");

alert("Ваша сдача: " + (money % chocolate_price));
