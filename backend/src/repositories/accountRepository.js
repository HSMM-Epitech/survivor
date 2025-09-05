const prisma = require('@config/prisma');

class AccountRepository {
    static async create(data) {
        return prisma.accounts.create({
            data: {
                email: data.email,
                password: data.password,
                name: data.name
            }
        });
    }

    static async update(id, data) {
        return prisma.accounts.update({
            where: { id },
            data
        });
    }

    static async findByEmail(email) {
        return prisma.accounts.findUnique({
            where: { email }
        });
    }

    static async delete(id) {
        return prisma.accounts.delete({
            where: { id }
        });
    }
}

module.exports = AccountRepository;
