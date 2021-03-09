import currentUser from "../utils/current_user.js";
import { navigateToUrl } from "../utils/routing.js";
import storageService from "../utils/storage_service.js"
import listOfUsers from "../utils/users.js"
import { showErrors } from "../utils/utils.js"

const EMAIL_REGEX = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
const USER_NAME = /^[a-zA-Z0-9\-]+$/
const MIN_PASSWORD_LENGTH = 8;
const PASSWORD_REGEX = /(([a-zA-Z]+\d+)|(\d+[a-zA-Z]+))[a-zA-Z\d]/;

function validateLogin({ email, password }) {

    let errors = {
        email: [],
        password: [],
    }

    const user = listOfUsers.getUserByEmail(email);

    console.log(email)

    if (!user) {
        errors = { ...errors, email: [...errors.email, "Email cannot be empty"] };
    }
    if (user.password !== password) {
        errors = { ...errors, email: [...errors.password, "Password does not match"] };
    }
    return errors;
}

export default function userLogin(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const email = formData.get("email");
    const password = formData.get("password");

    const user = listOfUsers.getUserByEmail(email);

    const errors = validateLogin({ email, password });

    showErrors(errors);

    if (!user) {
        alert("User does not exist");
        return;
    }

    const passwordHashed = CryptoJS.SHA3(password).toString();

    if (user.password !== passwordHashed) {
        alert("User does not exist");
        return;
    }

    currentUser.login(user);

    storageService.set("currentUser", JSON.stringify(user));

    navigateToUrl("/");
}
