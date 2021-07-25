let money = prompt("Ваш бюджет на месяц?", '');
let time = prompt("Введите дату в формате YYYY-MM-DD", ''); 

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let state = prompt("Введите обязательную статью расходов в этом месяце", ''),
    exp = prompt("Во сколько обойдется?", ''),
    state1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
    exp1 = prompt("Во сколько обойдется?", ''); 


appData.expenses.state = exp;
appData.expenses.state1 = exp1;

alert(appData.budget / 30);
