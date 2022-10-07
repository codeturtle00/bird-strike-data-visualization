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

To spin up development application, run 
```docker-compose -f docker-compose.dev.yml up```.  
To tear down, run
```docker-compose -f docker-compose.dev.yml down --volumes```.  

To build development image, run 
```docker build . -t bird-strike-react:latest```.  
To run the container, run ```docker run -it --rm -p 3000:3000 -v ${PWD}/src:/app/src -v /node_modules -e CHOKIDAR_USEPOLLING=true bird-strike-react:latest```. 

# Roadmap

Our roadmap currently consists of three milestones.

**Milestone 1:**
* Bootstrapped app
* Basic tests
* Documentation and processes in place

**Milestone 2:**
* Data visualizations for our Top-5 questions
* Deployed app
* CI & CD implementation

**Milestone 3:**
* Adding backend to interact with Twitter API
* Live data stream analysis for live tweets
* Frontend integration with Backend to display live plane crash data

At every stage we expect to add tests that <ins>fail on the previous stage</ins> but also <ins>succeed on the new code version with the latest functionality</ins>

## Team Member's Responsibilities

TODO

## Immediate Next Actions

TODO: A set of two to three  that each team member is responsible for, in order to achieve the first of those milestones.


# Detailed Process Documentation (IN PROGRESS)

## Work Organization

Trello and tasks.

## Meeting Structure

1 large weekly meeting on Wednesday.
1 additional small meeting to update on progress, usually during weekends.

## Dataset Selection

Provide datasets that we evaluated and which one we chose

## Technology stack solutions

For each of the below explain why so.

- Web application: `React`, `TypeScript`, `NodeJS`
- Visualizations: `Chart JS` (vs Datasette, Tableau)
- Database: `Postgres` (vs SQLite)
- AWS: `Amplify` `RDS`
- Containerization: `Docker`

## Application Design

Explain the trade-offs between
* Data + Tableau
* Data + FrontEnd
* Data + FrontEnd + BackEnd

Explain why we need backend in Phase 3. (security)

# Meeting Notes

TODO
