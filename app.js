let password = 8520;
let i = 0;
let j = 2;
let question;

while (i < 3) {

question = prompt(" Введите пароль ");

	if (question == password) {
		alert(" Пароль введен правильно! ");
		document.write(" Доступ разрешен!");
	break;
}

	if (j == 0) {
		alert(" У вас закончились попытки . Доступ запрещен");
		document.write("Доступ запрещен!");
} else {


		alert(" Пароль введен не правильно. У вас осталось " + j + " попыток ");
}

i++;
j--;
}
