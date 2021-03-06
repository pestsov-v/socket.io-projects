# Мини-проекты на Socket.io 

Всего репозиторий насчитывает следующие проекты:
- Catch Mind. Игра в реальном времени, где играют два игрока. В течение 30 секунд один должен нарисовать то, что указано в задании, а другой угадать. Угадавший получает + 10 очков.
- Socket.io-typescript. Проект подключения socket.io в проекты написанные на typescript.

## Оглавление

- [Мини-проекты на Socket.io](#мини-проекты-на-socketio)
	- [Оглавление](#оглавление)
	- [Catch Mind](#catch-mind)
	- [socket.io-typescript](#socketio-typescript)

## Catch Mind

Под капотом крутится следующий стэк: express.js, socket,io, gulp, pug.

Мини-проект онлайн игры в реальном времени. Игра подразумевает наличие двух участников. Суть игры: участники имеют общий чат и отдельное полотно. При запуске игры, один игрок видит задание: "нарисовать на полотне то, что сказано в задании", на это дело отводится 30 секунд. Другой участник должен отгадать что это за слово указано в задании исходя из рисунка и написать его в чат. Если участник угадал - он получает балы, если нет - тогда 0. Игроки меняются местами. 

## socket.io-typescript

Под капотом крутится стэк: typescript, express.js, socket.io.

Мини-проект имеет лишь одну задачу - показать, как развернуть socket.io на typescript. 
Фактически, кроме подключения работа с socket.io на JavaScript и TypeScript не отличается за нюансом типизации конкретных модулей или методов самого пакета socket.io.
