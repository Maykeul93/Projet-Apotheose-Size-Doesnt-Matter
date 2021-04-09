ROLE(id SERIAL, admin VARCHAR(60), user VARCHAR(60))

USER(id SERIAL, email VARCHAR (60) NOT NULL, password VARCHAR (60) NOT NULL UNIQUE, pseudo VARCHAR (60) NOT NULL, #ROLE(id))

GAME(id SERIAL,room TEXT, score INT, position INT, number_player INT, date TIMESTAMPZ, exact_answer INT DEFAULT 0)

USER_PLAY_GAME(#USER(id), #GAME(id))

QUESTION(id SERIAL, answer TEXT NOT NULL, content TEXT NOT NULL)

GAME_CONTAINS_QUESTION(#GAME(id), #QUESTION(id))

TAG(id SERIAL, name VARCHAR(60))

TAG_CATEGORIZE_QUESTION(#TAG(id),#QUESTION(id))