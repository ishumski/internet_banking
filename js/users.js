import storageService from "./storage_service.js";

class ListOfUsers {
    constructor(users) {
        this.users = users;
    }
    add(user) {
        this.users = [...this.users, user];
    }
}

// console.log(storageService.get("users"))

let users = JSON.parse(storageService.get("users"));

const listOfUsers = new ListOfUsers (users || []);

export default listOfUsers;