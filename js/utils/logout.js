import currentUser from "../utils/current_user.js";
import { navigateToUrl } from "../utils/routing.js";
import storageService from "../utils/storage_service.js";

export default function logOut() {

    currentUser.logout();
    
    storageService.set("currentUser", null);

    navigateToUrl("/");
};

