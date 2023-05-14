let size = prompt("Введите размер накопителя(гб)") * 1024;

const myfilesize = 820;

alert("На накопитель поместиться " + parseInt(size / myfilesize) + " файлов");
