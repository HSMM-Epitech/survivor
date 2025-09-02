CREATE TABLE startups (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    legal_status VARCHAR(255),
    website_url VARCHAR(255),
    social_media_url VARCHAR(255),
    address VARCHAR(255),
    phone_number VARCHAR(20),
    email VARCHAR(255) UNIQUE NOT NULL,
    sector VARCHAR(255),
    maturity VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);