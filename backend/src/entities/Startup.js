class StartupEntity {
    constructor({
        id,
        name,
        password,
        legalStatus = null,
        address = null,
        email,
        phone = null,
        createdAt = null,
        description = null,
        websiteUrl = null,
        socialMediaUrl = null,
        projectStatus = null,
        needs = null,
        sector = null,
        maturity = null,
        founders = []
    }) {
        if (!id) throw new Error("Startup ID is required");
        if (!name) throw new Error("Startup name is required");
        if (!email) throw new Error("Startup email is required");

        this.id = id;
        this.name = name;
        this.password = password;
        this.legalStatus = legalStatus;
        this.address = address;
        this.email = email;
        this.phone = phone;
        this.createdAt = createdAt ? new Date(createdAt) : null;
        this.description = description;
        this.websiteUrl = websiteUrl;
        this.socialMediaUrl = socialMediaUrl;
        this.projectStatus = projectStatus;
        this.needs = needs ? JSON.parse(needs) : [];
        this.sector = sector;
        this.maturity = maturity;
        this.founders = founders;
    }

    toObject() {
        return {
            id: this.id,
            name: this.name,
            password: this.password,
            legalStatus: this.legalStatus,
            address: this.address,
            email: this.email,
            phone: this.phone,
            createdAt: this.createdAt,
            description: this.description,
            websiteUrl: this.websiteUrl,
            socialMediaUrl: this.socialMediaUrl,
            projectStatus: this.projectStatus,
            needs: this.needs,
            sector: this.sector,
            maturity: this.maturity,
            founders: this.founders
        };
    }

    updateInfo({
        name,
        password,
        legalStatus,
        address,
        email,
        phone,
        description,
        websiteUrl,
        socialMediaUrl,
        projectStatus,
        needs,
        sector,
        maturity,
        founders
    }) {
        if (name !== undefined) this.name = name;
        if (password !== undefined) this.password = password;
        if (legalStatus !== undefined) this.legalStatus = legalStatus;
        if (address !== undefined) this.address = address;
        if (email !== undefined) this.email = email;
        if (phone !== undefined) this.phone = phone;
        if (description !== undefined) this.description = description;
        if (websiteUrl !== undefined) this.websiteUrl = websiteUrl;
        if (socialMediaUrl !== undefined) this.socialMediaUrl = socialMediaUrl;
        if (projectStatus !== undefined) this.projectStatus = projectStatus;
        if (needs !== undefined) this.needs = needs;
        if (sector !== undefined) this.sector = sector;
        if (maturity !== undefined) this.maturity = maturity;
        if (founders !== undefined) this.founders = founders;
    }
}

module.exports = StartupEntity;
