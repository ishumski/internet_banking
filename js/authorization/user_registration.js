import storageService from "../storage_service.js"
import listOfUsers from "../users.js"

export default function userRegistration(event) {
    event.preventDefault();//сбрасываем все настройки браузера, чтобы не мешал свыполнению кода

    //создаём переменную formData для того, чтобы поулчать данные из инпута
    const formData = new FormData(event.target);

    //получаем введенные данные из инпутов
    const email = formData.get("email");
    const userName = formData.get("userName");
    const password = formData.get("password");

    const newUser = {
        email,
        userName,
        password,
    }

    listOfUsers.add(newUser);
    storageService.set("users", JSON.stringify(listOfUsers.users));

}