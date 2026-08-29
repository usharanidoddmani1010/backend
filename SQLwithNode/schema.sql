CREATE TABLE user (
    id VARCHAR(50) PRIMARY KEY,
    username VARCHAR(50) unique,
    email VARCHAR(50) unique not null,
    password VARCHAR(50) not null
);
-- after this write in the CLI command ki source shcema.sql and then show tables we can also see this on the workbench