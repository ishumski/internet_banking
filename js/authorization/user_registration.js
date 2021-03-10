import currentUser from "../utils/current_user.js";
import { navigateToUrl } from "../utils/routing.js";
import storageService from "../utils/storage_service.js"
import listOfUsers from "../utils/users.js"
import { checkIfHasErrors, showErrors } from "../utils/utils.js"

const EMAIL_REGEX = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
const USER_NAME = /^[a-zA-Z0-9\-]+$/
const MIN_PASSWORD_LENGTH = 8;
const PASSWORD_REGEX = /(([a-zA-Z]+\d+)|(\d+[a-zA-Z]+))[a-zA-Z\d]/;

function validateRegistration({ email, userName, password }) {

    let errors = {
        email: [],
        userName: [],
        password: [],
    }

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
    event.preventDefault();

    const formData = new FormData(event.target);

    const email = formData.get("email");
    const userName = formData.get("userName");
    const password = formData.get("password");

    const errors = validateRegistration({ email, userName, password });

    showErrors(errors);

    const hasErrors = checkIfHasErrors(errors);

    if (hasErrors) {
        return;
    }

    const hashedPassword = CryptoJS.SHA3(password);

    let newUser = {
        email,
        userName,
        password: hashedPassword.toString(),
    };

    try {
        listOfUsers.add(newUser);
        currentUser.login(newUser);

        storageService.set("users", JSON.stringify(listOfUsers.users));
        storageService.set("currentUser", JSON.stringify(currentUser.userData));

        navigateToUrl("/");
    } catch (error) {
        alert(error.message);
    };

};