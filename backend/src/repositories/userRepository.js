const prisma = require('@config/prisma');

class UserRepository {
    static async findAll() {
        return prisma.users.findMany();
    }

    static async findById(id) {
        return prisma.users.findUnique({
            where: { id: id },
        });
    }

    static async create(data) {
        return prisma.users.create({
            data: {
                ...data,
                Accounts: {
                    connect: { id: data.account_id }
                }
            },
            include: { Accounts: true }
        });
    }

    static async update(id, data) {
        return prisma.users.update({
            where: { id },
            data,
            include: { Accounts: true }
        });
    }

    static async delete(id) {
        return prisma.users.delete({
            where: { id }
        });
    }
}

module.exports = UserRepository;
