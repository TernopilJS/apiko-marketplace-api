# Apiko marketplace API

## Running server

#### Development
To get local server working, you need to install PostgreSQL database.
You can download it [here](https://www.postgresql.org/).
After you have successfully installed PostgreSQL DB and ran it, you have to create a database called `apiko-marketplace` with the `postgres` user and the `password` password (you can change any of these in `knexfile.ts`, don't forget to rebuild the app after you made some changes).
You can find additional information about creating db [here](https://www.tutorialspoint.com/postgresql/postgresql_create_database.htm).

Then you need to install dependencies, build typescript and run the app.

```sh
$ npm install # install dependencies and build typescript
$ npm run dev:migrate:latest # migrate database to latest migration
$ npm run dev # to run the server
```