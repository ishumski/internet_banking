import storageService from "../utils/storage_service.js"

class ListOfUsers {
    constructor(users) {
        this.users = users;
    }
    add(user) {


        this.users = [...this.users, user];
    }

    //метод позволяет нам получить email уже имеющегося пользователя и сравнить его с email из login
    getUserByEmail(email){
        return this.users.find((user)=>user.email === email);
    }
}

// console.log(storageService.get("users"))

let users = JSON.parse(storageService.get("users"));

const listOfUsers = new ListOfUsers (users || []);

export default listOfUsers;