CREATE TABLE adminUsers {
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
}

CREATE TABLE founderUsers {
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    startup_id INTEGER REFERENCES startups(id) ON DELETE CASCADE,
}

CREATE TABLE investorUsers {
    id SERIAL PRIMARY KEY,
    investor_type VARCHAR(255),
    investment_focus TEXT,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    legal_status VARCHAR(255),
    address VARCHAR(255),
    phone_number VARCHAR(20),
    description TEXT,
}

CREATE TABLE partnerUsers {
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    legal_status VARCHAR(255),
    address VARCHAR(255),
    phone_number VARCHAR(20),
    description TEXT,
    partnership_type VARCHAR(255),
}
 