const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

// const password = prompt();
// if (password === null) {
//     message = `Отменено пользователем!`;
// } else if (password === ADMIN_PASSWORD) {
//     message = `Добро пожаловать!`;
// } else {
//     message = `Доступ запрещен, неверный пароль!`;
//  }

// alert(message);

const password = prompt();
switch (password) {
    case null:
        message = `Отменено пользователем!`;
        break;
    case ADMIN_PASSWORD:
        message = `Добро пожаловать!`;
        break;
    default:
        message = `Доступ запрещен, неверный пароль!`;
}
alert(message);