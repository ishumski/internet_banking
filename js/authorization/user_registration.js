import storageService from "../storage_service.js"
import listOfUsers from "../users.js"
import { showErrors } from "../utils.js"

const EMAIL_REGEX = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
const USER_NAME = /^[a-zA-Z0-9\-]+$/
const MIN_PASSWORD_LENGTH = 8;
const PASSWORD_REGEX = /(([a-zA-Z]+\d+)|(\d+[a-zA-Z]+))[a-zA-Z\d]/;

//пишем валидацию регистрации, проверяем емаил, имя пользователя, пароль
function validateRegistration({ email, userName, password }) {

    //ловим наши ошибки в объект, если переданные параметры не пройдут валидацию
    let errors = {
        email: [],
        userName: [],
        password: [],
    }
    //если строка email пустая, то записываем ошибку в массив
    if (!email) {
        errors = { ...errors, email: [...errors.email, "Email cannot be empty"] }
    }
    if (email && !EMAIL_REGEX.test(email)) {
        errors = { ...errors, email: [...errors.email, "Email invalid format"] }
    }
    if (!userName) {
        errors = { ...errors, userName: [...errors.userName, "User name cannot be empty"] }
    }
    if (userName && !USER_NAME.test(userName)) {
        errors = { ...errors, userName: [...errors.userName, "User name invalid format"] }
    }
    if (!password) {
        errors = { ...errors, password: [...errors.password, "Password invalid format"] }
    }
    if (password && password.length < MIN_PASSWORD_LENGTH) {
        errors = { ...errors, password: [...errors.password, `Password should contain at least ${MIN_PASSWORD_LENGTH} characters`] }
    }
    if (password && !PASSWORD_REGEX.test(password)) {
        errors = { ...errors, password: [...errors.password, "Password invalid format"] }
    }

    return errors;
}



export default function userRegistration(event) {
    event.preventDefault();//сбрасываем все настройки браузера, чтобы не мешал свыполнению кода

    //создаём переменную formData для того, чтобы поулчать данные из инпута
    const formData = new FormData(event.target);

    //получаем введенные данные из инпутов
    const email = formData.get("email");
    const userName = formData.get("userName");
    const password = formData.get("password");

    const errors = validateRegistration({ email, userName, password });

    showErrors(errors);

    let newUser = {
        email,
        userName,
        password,
    }

    listOfUsers.add(newUser);
    storageService.set("users", JSON.stringify(listOfUsers.users));

}