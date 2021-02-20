import userRegistration from "../authorization/user_registration.js";
import storageService from "../utils/storage_service.js";

class CurrentUser {
    constructor(userData) {
        this.userData = userData;
    }
    login(userData) {
        this.userData = userData;
    }
}


const userData = JSON.parse(storageService.get("currentUser"));
const currentUser = new CurrentUser(userData || null);

export default currentUser;