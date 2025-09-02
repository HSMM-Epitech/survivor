class ProjectEntity {
    constructor({
        id,
        name,
        description = "",
        founders = [],
        contacts = [],
        progress = "",
        needs = [],
        links = [],
        startupId
    }) {
        if (!id) throw new Error("Project ID is required");
        if (!name) throw new Error("Project name is required");
        if (!startupId) throw new Error("Associated startup ID is required");

        this.id = id;
        this.name = name;
        this.description = description;
        this.founders = founders;
        this.contacts = contacts;
        this.progress = progress;
        this.needs = needs;
        this.links = links;
        this.startupId = startupId;
    }

    toObject() {
        return {
            id: this.id,
            name: this.name,
            description: this.description,
            founders: this.founders,
            contacts: this.contacts,
            progress: this.progress,
            needs: this.needs,
            links: this.links,
            startupId: this.startupId
        };
    }

    update({
       name,
       description,
       founders,
       contacts,
       progress,
       needs,
       links
    }) {
        if (name !== undefined) this.name = name;
        if (description !== undefined) this.description = description;
        if (founders !== undefined) this.founders = founders;
        if (contacts !== undefined) this.contacts = contacts;
        if (progress !== undefined) this.progress = progress;
        if (needs !== undefined) this.needs = needs;
        if (links !== undefined) this.links = links;
    }
}

module.exports = ProjectEntity;
