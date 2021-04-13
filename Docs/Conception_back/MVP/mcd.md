T# MCD
## Structure MVP

```
GAME: room
contains, 1N GAME, 0N QUESTION
QUESTION: answer, content

play, 0N GAME, 1N USER :score, position, number player , date, number exact answer
:
categorize, 1N QUESTION, 1N TAG

USER:  email, password, pseudo, role
:
TAG: name
```

<img src="./Games.svg" width="500px">


