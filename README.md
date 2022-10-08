# Bird Strikes Visualization (CSC302 Project)

# Quick Links

* [Project Overview](https://github.com/codeturtle00/bird-strike-data-visualization#project-overview)
* [Running Application](https://github.com/codeturtle00/bird-strike-data-visualization#running-application)
* [Roadmap](https://github.com/codeturtle00/bird-strike-data-visualization#roadmap)
* [Detailed Process Documentation](https://github.com/codeturtle00/bird-strike-data-visualization#detailed-process-documentation)
* [Meeting Notes](https://github.com/codeturtle00/bird-strike-data-visualization/blob/main/docs/meeting-notes.md)

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
* **Jacky Yang**. Experience in UX design and full stack development with especial proficiency in React and Python.
* **Henning Lindig**. Experience in full-stack web development and software infrastructure
* **Dmytro Lopushanskyy**. Significant experience in Python, Data Engineering, Databases (Postgres, Cassandra)

## Tech Stack

- Web application: `React` `TypeScript` `NodeJS`
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
* Functionality to dockerize and easily spin up app
* Basic tests
* Documentation and processes in place

**Milestone 2:**
* Data visualizations for our Top-5 questions
* Deployed app
* CI & CD implementation
* Hosting the database and integrating it with backend

**Milestone 3:**
* Backend to interact with Twitter API
* Live data stream analysis for live tweets
* Frontend integration with Backend to display live plane crash data

At every stage we expect to add tests that <ins>fail on the previous stage</ins> but also <ins>succeed on the new code version with the latest functionality</ins>

## Team Member's Responsibilities

Technical responsibilities:
* Database, dealing with data, querying, database deployment - Dmytro
* FrontEnd (Charts, visualizations) - Jacky
* App deployment, Backend, Docker - Henning

Everyone is going to write test for their own thing.

Management responsibilities:
* Plan and develop the project idea
* Lead the team discussion, talk to proffessor
* Monitor project Progress and set deadlines, take notes
 
We expect to rotate the above management roles every two weeks. Our meeting agendas will contain role assignments.

## Immediate Next Actions

* Database server setup, loading the data into it, query preparation - Dmytro
* Chart creation in the React app, communicating with Backend to get the data - Jacky
* Backend implementation to talk to the database and provide endpoints for Frontend, app deployment - Henning

# Detailed Process Documentation

## Work Organization

Tasks are organized on GitHub Projects board. We have three columns: To Do, In Progress, and Done, which helps us organize the work in a Kanban way.

## Meeting Structure

One large weekly meeting on Wednesday.
One additional small meeting to update on progress, usually during weekends.

## Application Design

For this project, we have been considering three approaches:
* Data + Tableau / Datasette
* Data + FrontEnd
* Data + FrontEnd + BackEnd

All of these can be viable solutions, although they represent different levels of complexity. 

We have discarded the first option as that one does not satisfy our assignment requirements. We are going to need to implement CI/CD, testing, etc, and it almost does not make sense to do it when you are working with ready software solutions such as Tableau or Datasette. The implementation does not require any significant coding so it did not fit our expectations as well.

Data + FrontEnd was the sweet spot that we have initially selected. Unfortunately, it did not go as planned. We quickly understood the need to query the database and implement some complex logic that we did not want to put into our FrontEnd. Moreover, application security is required. In the future phases we are going to connect to the db server, and it is not possible to store credentials reliably in a FrontEnd application.

Thus, we are going to use database + FrontEnd + BackEnd. Most of the web solutions nowadays follow this principle, and we are just going to follow the common practices.

## Technology Stack Solutions

### Web Application

Here are the solutions we considered for FrontEnd:
* Vanilla JavaScript or JQuery, HTML/CSS. **Cons:** too complex to implement, no one uses this stack today to develop modern apps.
* Angular. **Cons:** Is more suited for more complex applications, no one in the team has experience with it.
* Vue vs React. This one is debatable and has not clear winner from the technical side for our app. Since all team members worked with React before, it became the winner.

We also preferred using Typescipt over JavaScript because of its language features, reference validation, project scalability, and code maintainability.

Here are the solutions we considered for BackEnd:
* Python (libs as Flask, Django, FastAPI) **Cons:** Python is single-flow, and requests are processed quite slowly
* Java vs NodeJS. Java dominates enterprise computing applications and offers top performance and security but it is more difficult to use. Team members also lack experience with it, and we did not want to focus on digging into learning Java.
* NodeJS with TypeScript. Everyone has experience with it, it offers quick and easy development, great features. There is also a huge precident in industry for React + NodeJS apps.

## Visualizations

For visualizations, we considered software solutions such as Datasette, Tableau and library as ChartJS.

Since we decided / were required to to write our own software and not rely on other platforms that provide too much out of the box, Datasette and Tableau did not satisfy this requirement. However, writing custom visualization in the browser from scratch would be very time consuming and overkill given the scope of our application. Thus, ChartJS was a perfect compromise to use for the FrontEnd app to reuse a nice chart builder functionality, while still maintaining a good amount of control ourselves. Since the implementation for the visualizations is set for a future milestone, we are aware that we that we may have to reassess this decision.

## Databases

### No DB

We have thought about bundling the CSV file with the app directly. This is not a viable solution since the app would become too large, especially given the fact that we have a 200MB+ dataset.

### SQLite

Since we are building our website with scale in mind, we pushed back on using SQLite. [A small excerpt](https://www.sqlite.org/whentouse.html) from SQLite has a nice guide that we used to make a decisiom:

Is the data separated from the application by a network? → choose client/server.  
Many concurrent writers? → choose client/server.  
Big data? → choose client/server.  
Otherwise → choose SQLite!   

Our app is going to be designed to be highly scalable so SQLite is not an option.

### NoSQL

NoSQL databases are great for unstructured data and Big Data workloads that require horizontal scaling, but these benefits are not very relevant for our app. We also do not forsee these items becoming issues in the future.

### Relational Server DBs

Since our data is already well-structured and tabluar, a SQL-based db is a good candiadate. Combined with the ACID properties of SQL dbs, the better querying against complex and structured data, and the team members' familiarity with SQL, we decided that going this route is a great choice.

There are a number of relation DBs out there (Postgres, MySQL, Oracle, RDS, etc).
For our app, there are no difference which one to use from the technical side.
Since the team is most familiar with postgresql, we decide to use Postgres.

## Cloud

In the future, we are going to host our apps. Both AWS and Azure and GCP offer all the resources we might need so there is no clear winner there. Since we have a free student tier on AWS, this is the cloud we are going to use.

## Containers

[Docker vs Vagrant](https://keyua.org/blog/docker-vs-vagrant-for-development/): Vagrant allows you to isolate all the necessary resources completely. However, compared to Docker, it requires more resources initially. Compared to Vagrant, Docker wins on this criterion because it spends fewer resources, and you can create Docker images faster than Vagrant virtual machine

This is why we chose Docker.

## Dataset Selection

During the initial meeting we decided to work with Airplane datasets, since all of us had interest in it. We have generated the following dataset ideas:

https://www.kaggle.com/datasets/thedevastator/airplane-crashes-and-fatalities
https://www.kaggle.com/datasets/saurograndi/airplane-crashes-since-1908
https://www.kaggle.com/code/ruslankl/airplane-crashes-data-visualization
https://github.com/quankiquanki/skytrax-reviews-dataset   
https://wildlife.faa.gov/home

Out of all of these, some are wildly popular, thus not very interesting to explore.  
Some do not contain enough data to draw any interesting conclusions.

The only dataset that all of us liked was the last one, which we decided to use.
