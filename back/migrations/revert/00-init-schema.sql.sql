-- Revert aposize:00-init-schema.sql from pg

BEGIN;

DROP TABLE "user", "game", "user_play_game", "question", "game_contains_question", "tag", "tag_categorize_question"; 

COMMIT;
