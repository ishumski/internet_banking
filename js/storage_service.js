//создаём класс StorageStorage
class StorageService {

    //метод для добавления наших user в список пользователей
    set(key, value) {
        localStorage.setItem(key, value);
    }
    //метод для получения данных о user (есть ли он в хранилище данных или нет)
    get(key) {
        localStorage.getItem(key);
    }
}

export default new StorageService();
