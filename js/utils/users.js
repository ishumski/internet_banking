import storageService from "../utils/storage_service.js"

class ListOfUsers {
    constructor(users) {
        this.users = users;
    }
    add(user) {

        this.users = [...this.users, user];
    }

    getUserByEmail(email){
        return this.users.find((user)=>user.email === email);
    }
}

let users = JSON.parse(storageService.get("users"));

const listOfUsers = new ListOfUsers (users || []);

export default listOfUsers;