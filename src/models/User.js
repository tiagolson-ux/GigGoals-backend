import { UserOperations } from "../config/fileDB.js";

class User {
  constructor(userData) {
    this._id = userData._id;
    this.name = userData.name;
    this.email = userData.email;
    this.password = userData.password;
    this.createdAt = userData.createdAt;
    this.updatedAt = userData.updatedAt;
  }

  static async findOne(query) {
    const userData = await UserOperations.findOne(query);
    return userData ? new User(userData) : null;
  }

  static async create(userData) {
    const newUser = await UserOperations.create(userData);
    return new User(newUser);
  }

  static async findById(id) {
    const userData = await UserOperations.findById(id);
    return userData ? new User(userData) : null;
  }

  async save() {
    // For simplicity, we'll use findByIdAndUpdate
    const updatedUser = await UserOperations.findByIdAndUpdate(this._id, {
      name: this.name,
      email: this.email,
      password: this.password
    });
    return new User(updatedUser);
  }

  toJSON() {
    return {
      _id: this._id,
      name: this.name,
      email: this.email,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    };
  }
}

export default User;
