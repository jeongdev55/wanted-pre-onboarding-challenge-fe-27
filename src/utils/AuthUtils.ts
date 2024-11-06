export class AuthUtils {
  private storage: Storage;

  constructor(storage: Storage) {
    this.storage = storage;
  }

  getToken() {
    return this.storage.getItem("sessionToken");
  }

  setToken(token: string) {
    this.storage.setItem("sessionToken", token);
  }
}
