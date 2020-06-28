export class AuthService {
  isAuth = false;
  isAutkOk = true;
  signIn() {
    return new Promise(
      (resolve, reject) => {
        setTimeout(
          () => {
            this.isAuth = true;
            resolve(true);
          }, 2000
        );
      }
    );
  }
  signOut() {
    this.isAuth = false ;
  }
}
