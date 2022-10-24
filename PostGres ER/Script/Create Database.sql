CREATE DATABASE "BolaoCopa"
    WITH
    OWNER = postgres
    TEMPLATE = template1
    ENCODING = 'UTF8'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;
COMMIT;
USE "BolaoCopa";