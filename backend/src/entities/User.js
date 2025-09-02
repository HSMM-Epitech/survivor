class UserEntity {
    constructor({ id, emails, name, role, founderId = null, investorId = null, password, isActive = true}) {
        if (!emails) throw new Error("Email is required");
        if (!name) throw new Error("Name is required");
        if (!role) throw new Error("Role is required");
        if (!password) throw new Error("Password is required");

        this.id = id;
        this.emails = emails;
        this.name = name;
        this.role = role;
        this.founderId = founderId;
        this.investorId = investorId;
        this.password = password;
        this.isActive = isActive;
    }

    toObject() {
        return {
            id: this.id,
            emails: this.emails,
            name: this.name,
            role: this.role,
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
