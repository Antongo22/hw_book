let user = prompt("Кто там?");

if (user == "Админ")
{

    let pass = prompt("Пароль?")
    
    if (pass = "Я Главный")
    {
        alert("Здравствуйте!")
    }
    else if (pass == "Отмена")
    {
        alert("Отменено")
    }
    else
    {
        alert("Неверный пароль")
    }

}

else if (user == "Отмена")
{
    alert("Отменено")
}

else
{
    alert("Я вас не знаю")
}