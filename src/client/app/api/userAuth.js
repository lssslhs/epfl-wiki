class UserAuthApi {
  static signIn(user) {
    return new Promise((resolve, reject) => {
      alert('user sign in');
      resolve(user);
    });
  }

  static registration(user) {
    return new Promise((resolve, reject) => {
      alert('user sign in');
      resolve(user);
    });
  }
}

export default UserAuthApi;
