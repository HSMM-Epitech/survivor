const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const StartupRepository = require("@repositories/startupRepository");
const StartupEntity = require("@entities/Startup");

class AuthService {
    constructor() {
        this.startupRepo = new StartupRepository();
        this.jwtSecret = process.env.JWT_SECRET;
        this.tokenExpiry = "1h";
    }

    async signup({ name, email, password }) {
        const existing = await this.startupRepo.findByEmail(email);
        if (existing) throw new Error("Email already in use");

        const hashed = await bcrypt.hash(password, 10);
        const startup = await this.startupRepo.create({ name, email, password: hashed });
        return this.generateToken(startup);
    }

    async login(email, password) {
        const startupData = await this.startupRepo.findByEmail(email);
        if (!startupData) throw new Error("Startup not found");

        const startup = new StartupEntity(startupData);

        const valid = await bcrypt.compare(password, startup.password);
        if (!valid) throw new Error("Invalid password");

        return this.generateToken(startup);
    }

    generateToken(startup) {
        const payload = { startupId: startup.id };
        return jwt.sign(payload, this.jwtSecret, { expiresIn: this.tokenExpiry });
    }
}

module.exports = AuthService;
