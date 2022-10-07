# Bird Strikes Visualization (CSC302 Project)

# Quick Links

* [Project Overview](https://github.com/codeturtle00/bird-strike-data-visualization#project-overview)
* [Running Application](https://github.com/codeturtle00/bird-strike-data-visualization#running-application)
* [Roadmap](https://github.com/codeturtle00/bird-strike-data-visualization#roadmap)
* [Meeting Notes](https://github.com/codeturtle00/bird-strike-data-visualization#meeting-notes)
* [Detailed Process Documentation](https://github.com/codeturtle00/bird-strike-data-visualization#detailed-process-documentation)

# Project Overview

*Note: To read about how we arrived at this design, please see the sections below*

Our task was to find meaningful dataset that we could visualize and draw interesting conclusions from. We decided to use a governmental dataset called [FAA Wildlife Strike Database](https://wildlife.faa.gov/home). It contains records of reported wildlife strikes since 1990.

We will be developing a web application that displays important and interesting statistics from the above-mentioned dataset. Among the questions that we are going to answer, we include but are not limited to the following:
* Where are bird strikes most frequent?
* How fatal are bird strikes accidents?
* Safety of different types of aircrafts?
* When (trends over time)?

## Team

Our team consists of three members, 4th year UofT students.
* Jacky.
* Henning.
* **Dmytro Lopushanskyy**. Significant experience in Python, Data Engineering, Databases (Postgres, Cassandra)

## Tech Stack

- Web application: `React`
- Visualizations: `Chart JS`
- Database: `Postgres`
- AWS: `Amplify` `RDS`
- Containerization: `Docker`

# Running Application

To spin up development application, run `docker-compose -f docker-compose.dev.yml up`. 
To tear down, run `docker-compose -f docker-compose.dev.yml down --volumes`. 

To build development image, run `docker build . -t bird-strike-react:latest`. 
To run the container, run `docker run -it --rm -p 3000:3000 -v ${PWD}/src:/app/src -v /node_modules -e CHOKIDAR_USEPOLLING=true bird-strike-react:latest`. 

# Roadmap


# Meeting Notes


# Detailed Process Documentation
