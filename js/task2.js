
const total = 100;
const ordered = 50;

if (ordered > total) {
    console.log(`На складе недостаточно товаров!`)
} else {
    console.log(`Заказ оформлен, с вами свяжется менеджер.`)
}

const result = ordered > total ? `На складе недостаточно товаров!` : `Заказ оформлен, с вами свяжется менеджер.`;
console.log(result);

