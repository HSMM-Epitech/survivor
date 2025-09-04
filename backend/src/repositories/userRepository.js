const prisma = require('@config/prisma');

class UserRepository {
    static async findAll() {
        return prisma.users.findMany({
            include: {
                account: true
            }
        });
    }

    static async findById(id) {
        return prisma.users.findUnique({
            where: { id },
            include: {
                account: true
            }
        });
    }

    static async create(data) {
        return prisma.users.create({
            data: {
                account_id: data.account_id
            },
            include: {
                account: true
            }
        });
    }

    static async update(id, data) {
        return prisma.users.update({
            where: { id },
            data,
            include: {
                account: true
            }
        });
    }

    static async delete(id) {
        return prisma.users.delete({
            where: { id }
        });
    }
}

module.exports = UserRepository;
