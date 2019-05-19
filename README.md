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

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

- [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
- [Maven](https://maven.apache.org/) - Dependency Management
- [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc
