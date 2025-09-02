const prisma = require("@config/prisma");

class StartupRepository {
    async create({ name, email, password }) {
        return await prisma.startup.create({
            data: { name, email, password }
        });
    }

    async findByEmail(email) {
        return await prisma.startup.findUnique({ where: { email } });
    }
}

module.exports = StartupRepository;
