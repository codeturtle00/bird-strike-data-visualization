# Meeting Notes

*Disclaimer: meeting notes might sometimes be chaotic, main decisions and discussions are summarized in the root README.md file. Please refer to it for the latest and most structured information.*

Please be aware that this file is being regularly updated with most recent meeting notes coming up first.

## October 9

Discussion:

Henning
* Demoed code 
* Question: work directly with bird strike database source from FAA?
* For next milestone, use full dataset and do most processing serverside
* Production env (small image, build static files from react app) necessary? -> conclusion: not for this assignment

Jacky:
* Having trouble installing docker engine, getting windows permission issues

Dmytro: 
* Demoed project/process write up 
* Should add why we decided to add server

Action Items:
* Dmytro: write remaining readme, write what didn’t go well (backend story)
* Henning: Add basic visualization to frontend, write some tests, review documentation
* Jacky: Get docker install / spinning up environment working, review documentation

## 5 October

Agenda:
* Finalize tech stack and dataset
* Create git repo according to A1 rubric 

Discussion:
* Setting up project on user machines.
* Support major linux distributions and windows (get wsl and then install)
* Different installation scripts per distribution
* Install docker engine
* Pull docker images
* Compose with env variables + configuration

Tech stack discussion:
* Checked out Datasette, we decided on a react app for frontend

Datasette Pros: out of the box, free plugins.

React Pros:
* Team has experience in it for productivity and maintenance
* Complex enough to create tests and CI for the learning objectives of this course

Backend App Design:
* Scripts that transform data into static visualizations – too simple

React app that
1. bundles the csv file with app -> large file, weird to parse
2. Store in database	
* Database hosted on cloud issues:(credentials, data mutated)
* Run and populate as docker container locally

If we want live / streamed data, setup backend 
* Twitter account (https://twitter.com/AviationSafety) that tweets formatted information about new crashes 2-3 times a day -- Adds complexity
Decision: if we need to add complexity to system, add backend for live feed feature

TODO:
* Installation instructions and scripts + dockerize (pair). - Jacky
* Process related (meeting notes, github, scrum stuff, documentation). - Dmytro
* Setup project - simple react app (visualisation - https://react-chartjs-2.js.org/), parse data into dbs, have react call db + dockerize (pair) - Henning
	

To Create:
- Scripts to download dependencies based on OS


A preliminary project development plan, that elaborates: 

Milestone 1:
* Bootstrapped app
* Basic tests
* Documentation and processes in place

Milestone 2:
* Visualizations of data
* Deployed app
* CD / CI testing

Milestone 3:
* backend that streams live twitter data, frontend pulls from it
* Frontend “live crash feed”

Final functionality of the Main page:
* Block describing the dataset in general (what it is, where it comes from, which data it has, etc)
* Team block
* Answers to questions:
  * Where are bird strikes most frequent?
  * How fatal are bird strikes accidents?
  * Safety of different types of aircrafts?
  * When (trends over time)?
  * Injuries over time (has it gotten safer)?


## 21 September

Agenda:
* Review Assignment Rubric
* Discuss Tech Stack
* Choose dataset category

Tech Stack:
SQLite will not be a good database choice since it stores the data as a file. A small excerpt from SQLite:

Is the data separated from the application by a network? → choose client/server.
Many concurrent writers? → choose client/server.
Big data? → choose client/server.
Otherwise → choose SQLite!

Our app is going to be designed to be highly scalable so SQLite is not an option.

Discussed power bi vs tableau vs own implementation.

We have three design options:
* Data + Tableau
* Data + FrontEnd app
* Data +FrontEnd app + Backend API

Questions to ask prof:
* “You will write the documentation, automation, and testing for that tool, as well as the documentation, automation and testing for that documentation, automation and testing” - how to understand this
* According to specifications of this assignment, there seems to be no need to build software? We can find a dataset and use existing tools: Tableau, Power BI to extract results.
Seems like we are not writing much code other than data exploration

Dataset Ideas:
https://www.kaggle.com/datasets/thedevastator/airplane-crashes-and-fatalities.  
https://www.kaggle.com/datasets/saurograndi/airplane-crashes-since-1908.  
https://www.kaggle.com/code/ruslankl/airplane-crashes-data-visualization.  
https://github.com/quankiquanki/skytrax-reviews-dataset.  
Bird strike 2000-2011: https://data.world/hhaveliw/data-visualization-bird-strike.  

Next steps, before next meeting:
* Finalize dataset(s) to use
* Explore the tech stacks we talked about today. Ask prof for clarification on product expectation
* Set up empty github repo

Action Items:
* Henning: sample datasette app - visualize the 1908+ flight data (check plugins, deployment, amount of code)
* Jacky: Set up github. Explore Datasette, Tableau (if prof confirms is a viable option). Explore other dataset options.
* Dmytro: EDA (Exploratory Data Analysis) in Jupyter with airplane-crashes-and-fatalities. Ask prof for clarifications product expectation and other questions


