import storageService from "../utils/storage_service.js"

class ListOfUsers {
    constructor(users) {
        this.users = users;
    }
    add(user) {
        const exitingUser = this.getUserByEmail(user.email);

        if (exitingUser) {
            throw new Error("User with this email already exists");
        }

        this.users = [...this.users, user];
    }

    getUserByEmail(email) {
        return this.users.find((user) => user.email === email);
    }
}

let users = JSON.parse(storageService.get("users"));

const listOfUsers = new ListOfUsers(users || []);

export default listOfUsers;