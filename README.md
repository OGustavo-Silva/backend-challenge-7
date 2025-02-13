This project is my implementation of the back-end challenge 7 by Alura
Following the design on: https://trello.com/b/OnuqDQ3A/alurachallengebackend7-semana-1

## How to run
It's necessary to have MongoDB installed on the system and set the env variable `DB_CONN_STRING` with your connection string 

Reference for mongo connection strings: https://www.mongodb.com/docs/manual/reference/connection-string/

Run: `npm install` on the project root to install dependencies and then run `npm start` to start the project

## Endpoints
`statement/` simple GET endpoint with no parameters. Returns data of all statements registered.

`statement/:id` GET endpoint the returns data for one specific statement based on id.