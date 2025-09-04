const bcrypt = require('bcrypt');
const UserRepository = require('@repositories/userRepository');
const AccountRepository = require('@repositories/accountRepository');
const UserEntity = require('@entities/User');

class UserService {
    static async getAllUsers() {
        return await UserRepository.findAll();
    }

    static async getUserById(id) {
        return await UserRepository.findById(id);
    }

    static async createUser(data) {
        const hashedPassword = await bcrypt.hash(data.password, 10);

        const entity = new UserEntity({
            email: data.email,
            name: data.name,
            password: hashedPassword
        });

        const account = await AccountRepository.create({
            email: entity.email,
            password: entity.password,
            name: entity.name
        });

        const user = await UserRepository.create({
            account_id: account.id
        });

        return {
            id: user.id,
            account: {
                id: account.id,
                email: account.email,
                name: account.name,
                image_path: account.image_path,
                created_at: account.created_at
            }
        };
    }

    static async updateUser(id, data) {
        const exists = await UserRepository.findById(id);
        if (!exists) return null;

        const updateData = {};
        if (data.name) updateData.name = data.name;
        if (data.email) updateData.email = data.email;
        if (data.password) {
            updateData.password = await bcrypt.hash(data.password, 10);
        }

        const updatedAccount = await AccountRepository.update(exists.account_id, updateData);

        return {
            id: exists.id,
            account: {
                id: updatedAccount.id,
                email: updatedAccount.email,
                name: updatedAccount.name,
                image_path: updatedAccount.image_path,
                last_updated_at: updatedAccount.last_updated_at
            }
        };
    }

    static async deleteUser(id) {
        const exists = await UserRepository.findById(id);
        if (!exists) return null;
        return await UserRepository.delete(id);
    }
}

module.exports = UserService;
