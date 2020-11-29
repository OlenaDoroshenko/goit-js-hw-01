
let price;
const china = `Китай`;
const chile = `Чили`;
const australia = `Австралия`;
const india = `Индия`;
const jamaica = `Ямайка`;
const country = prompt('Введите название страну');
switch (country.toLowerCase()) {
    case china.toLowerCase():
        price = 100;
        break;
    case chile.toLowerCase():
        price = 250;
        break;
    case australia.toLowerCase():
        price = 170;
        break;
    case india.toLowerCase():
        price = 80;
        break;
    case jamaica.toLowerCase():
        price = 120;
        break;
    default:
        alert(`В вашей стране доставка недоступна.`);
}

console.log(`Доставка в ${country} будет стоить ${price} кредитов.`);






