const UserRepository = require('@repositories/userRepository');

class UserService {
    static async getAllUsers() {
        return await UserRepository.findAll();
    }

    static async getUserById(id) {
        return await UserRepository.findById(id);
    }

    static async createUser(data) {
        return await UserRepository.create(data);
    }

    static async updateUser(id, data) {
        const exists = await UserRepository.findById(id);
        if (!exists) return null;
        return await UserRepository.update(id, data);
    }

    static async deleteUser(id) {
        const exists = await UserRepository.findById(id);
        if (!exists) return null;
        return await UserRepository.delete(id);
    }
}

module.exports = UserService;
