-- Deploy aposize:00-init-schema.sql to pg

BEGIN;

CREATE TABLE "user" (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    email VARCHAR (60) NOT NULL UNIQUE,
    password VARCHAR (60) NOT NULL,
    pseudo VARCHAR (60) NOT NULL,
    avatar VARCHAR (15) NOT NULL DEFAULT 'Alexou' ,
    role TEXT
);

CREATE TABLE game (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    room TEXT, 
    number_player INT
    
);

CREATE TABLE user_play_game (
    user_id INT NOT NULL REFERENCES "user"(id),
    game_id INT NOT NULL REFERENCES game(id),
    score INT DEFAULT 0,
    position INT,
    date TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    exact_answer INT DEFAULT 0

);

CREATE TABLE question (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    answer TEXT NOT NULL,
    content TEXT NOT NULL

);

CREATE TABLE game_contains_question(
    game_id INT NOT NULL REFERENCES game(id),
    question_id INT NOT NULL REFERENCES question(id)

);

CREATE TABLE tag (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR (60)
);

CREATE TABLE tag_categorize_question(
    tag_id INT NOT NULL REFERENCES tag(id),
    question_id INT NOT NULL REFERENCES question(id)


);

COMMIT;
