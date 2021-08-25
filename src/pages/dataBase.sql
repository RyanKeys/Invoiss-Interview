-- Setup
-- Assume DB = postgresql

-- Given the table:

CREATE TABLE something
(
    id uuid NOT NULL,
    name  CHARACTER VARYING(255) NOT NULL,
    email CHARACTER VARYING(255) NOT NULL,
    phone CHARACTER VARYING(255),
    birthday DATE,
    age INTEGER
);
SELECT current_date;
-- create a trigger/function which will calculate the age on insert or modify given the birthday
-- I spent most of my time working on this issue. Hopefully this works the way you want.
CREATE FUNCTION update_age() RETURNS TRIGGER AS $updates_user_age$
BEGIN
  UPDATE "something"
  SET "age" = "age" + 1
  RETURN NEW;
END;
$updates_user_age$ LANGUAGE plpgsql;
