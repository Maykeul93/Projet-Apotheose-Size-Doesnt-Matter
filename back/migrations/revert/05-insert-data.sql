-- Revert aposize:05-insert-data from pg

BEGIN;

TRUNCATE TABLE "user", "tag_categorize_question", "tag", "question", "user_play_game", "game_contains_question";

COMMIT;
