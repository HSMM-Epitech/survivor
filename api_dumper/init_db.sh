#!/usr/bin/env bash
set -euo pipefail

# --- Config ---
DB_NAME="incubator"
DB_USER="incubator_user"
DB_PASS=$(openssl rand -base64 12)
SQL_SCHEMA="../db_schemes/temp.sql"

# --- Création user ---
echo "Création de l'utilisateur PostgreSQL..."
sudo -u postgres psql -tc "SELECT 1 FROM pg_roles WHERE rolname='$DB_USER'" | grep -q 1 || \
sudo -u postgres psql -c "CREATE USER $DB_USER WITH PASSWORD '$DB_PASS';"
echo "✅ Utilisateur prêt."

# --- Création DB ---
echo "Création de la base de données..."
sudo -u postgres psql -tc "SELECT 1 FROM pg_database WHERE datname='$DB_NAME'" | grep -q 1 || \
sudo -u postgres psql -c "CREATE DATABASE $DB_NAME OWNER $DB_USER;"
echo "✅ Base de données prête."
# --- Privilèges ---
sudo -u postgres psql -c "GRANT ALL PRIVILEGES ON DATABASE $DB_NAME TO $DB_USER;"

# --- Import schema SQL ---
if [ -f "$SQL_SCHEMA" ]; then
    echo "Import du schéma SQL depuis $SQL_SCHEMA..."
    sudo -u postgres psql -d "$DB_NAME" -f "$SQL_SCHEMA"
    echo "✅ Schéma SQL appliqué."

    # --- Assigner toutes les tables, séquences et fonctions à l'utilisateur ---
    echo "Assignation de tous les objets à $DB_USER..."
    sudo -u postgres psql -d "$DB_NAME" -c "DO \$\$ DECLARE r RECORD; BEGIN
        FOR r IN SELECT tablename FROM pg_tables WHERE schemaname='public' LOOP
            EXECUTE format('ALTER TABLE %I OWNER TO $DB_USER;', r.tablename);
        END LOOP;
        FOR r IN SELECT sequence_name FROM information_schema.sequences WHERE sequence_schema='public' LOOP
            EXECUTE format('ALTER SEQUENCE %I OWNER TO $DB_USER;', r.sequence_name);
        END LOOP;
        FOR r IN SELECT routine_name FROM information_schema.routines WHERE routine_schema='public' LOOP
            EXECUTE format('ALTER FUNCTION %I() OWNER TO $DB_USER;', r.routine_name);
        END LOOP;
    END \$\$;"
    echo "✅ Propriétés transférées à $DB_USER."
else
    echo "[WARN] Fichier SQL '$SQL_SCHEMA' introuvable, aucune table créée."
fi

# --- Mise à jour .env ---
ENV_FILE=".env"
[ ! -f "$ENV_FILE" ] && touch "$ENV_FILE"

# Supprime les anciennes variables PostgreSQL si elles existent
sed -i '/^DB_NAME=/d;/^DB_USER=/d;/^DB_PASSWORD=/d;/^DB_HOST=/d;/^DB_PORT=/d' "$ENV_FILE"

# Ajoute les nouvelles
cat >> "$ENV_FILE" <<EOF
DB_NAME=$DB_NAME
DB_USER=$DB_USER
DB_PASSWORD=$DB_PASS
DB_HOST=localhost
DB_PORT=5432
EOF

echo "✅ .env mis à jour avec les infos PostgreSQL.
Random password généré pour l'utilisateur '$DB_USER' : trouvable dans '$ENV_FILE'."