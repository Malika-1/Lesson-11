let age = +prompt('Сколько тебе лет ?')

if( age >= 18){
  const name = +prompt('Как тебя зовут?')
   
    if (name.length >= '6'){
        alert('Можно')
    } else{
        alert('Нельзя')
    }
}
else{
    alert('Нельзя')
}


const a = +prompt('Введите первое число');
const b = +prompt('Введите второе число');
const operation = prompt('Какую операцию вы хотите сделать');

if (operation === '-') {
    alert(`${a} - ${b} = ${a - b}`);
} else if (operation === '+') {
    alert(`${a} + ${b} = ${a + b}`);
} else if (operation === '*') {
    alert(`${a} * ${b} = ${a * b}`);
} else if (operation === '/') {
    alert(`${a} / ${b} = ${a / b}`);
} else {
    alert('Не поддерживается');
}