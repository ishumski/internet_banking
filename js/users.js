import storageService from "./storage_service.js";

class ListOfUsers {
    constructor(users) {
        this.users = users;
    }
    add(user) {
        this.users = [...this.users, user];
    }
}

const users = JSON.parse(storageService.get("users"));

const listOfUsers = new ListOfUsers (users || []);

export default listOfUsers;