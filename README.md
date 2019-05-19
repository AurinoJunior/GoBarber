# GoBarber

Application created with nodejs and express for control scheduler barber shop.

### Prerequisites

- [Docker](https://www.docker.com/get-started).
- [Docker compose](https://docs.docker.com/compose/install/).

## Getting Started

1. Run command `docker build -t gobarber .` to build the image and install application dependencies.

2. Run command `docker-composer down && docker-compose up` to up the containers of application and database.

3. Enter in the application container with the command `docker exec -it application ash`

4. In the container application run command `npx sequelize db:migrate` to migrate database

5. Now access localhost:3000 and use the application.

## Acknowledgments

- Thanks to rocketseat for the content and learnings acquired in bootcamp.
