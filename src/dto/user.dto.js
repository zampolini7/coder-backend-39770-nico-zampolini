class UserDTO {
  constructor(user) {
    this.name = user.name;
    this.id = user.id;
    this.email = user.email;
    this.role = user.role;
    this.photo = user.photo;
  }
}

const getUserData = (user) => new UserDTO(user);

export default getUserData;
