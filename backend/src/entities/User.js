class UserEntity {
    constructor({ id, email, name, founderId = null, investorId = null, password, isActive = true }) {
        if (!email) throw new Error("Email is required");
        if (!name) throw new Error("Name is required");
        if (!password) throw new Error("Password is required");

        this.id = id;
        this.email = email;
        this.name = name;
        this.founderId = founderId;
        this.investorId = investorId;
        this.password = password;
        this.isActive = isActive;
    }

    toObject() {
        return {
            id: this.id,
            email: this.email,
            name: this.name,
            founderId: this.founderId,
            investorId: this.investorId,
            isActive: this.isActive
        };
    }

    changePassword(currentPassword, newPassword, verifyFn) {
        if (!verifyFn(currentPassword, this.password)) {
            throw new Error("Current password is incorrect");
        }
        if (currentPassword === newPassword) {
            throw new Error("New password must be different");
        }
        this.password = newPassword;
    }
}

module.exports = UserEntity;
