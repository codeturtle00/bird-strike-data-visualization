# Meeting Notes

*Disclaimer: meeting notes might sometimes be chaotic, main decisions and discussions are summarized in the root README.md file. Please refer to it for the latest and most structured information.*

Please be aware that this file is being regularly updated with most recent meeting notes coming up first. So far we are trying to do weekly hourly sync meetings while working on each assignment.

## November 30
*Person taking notes: Jacky*    
*Person leading the discussion: Henning*

Agenda:
* Quick sync on individual progress
* Discuss presentation content 
* Assign concrete deadlines

Updates:
* Dmytro showed the queries needed for our final additional features
* Jacky showed state of frontend
* Henning discussed endpoints and logging we'll need to implement
* Briefly reviewed previous meeting and post mortem docs and match them to criteria for final presentation

Deadlines:
* (Dmytro) Finish presentation slides draft Friday night, we will review on weekend
* (Henning) Implement logging and residual endpoints by Friday
* (Jacky) Finished frontend product by Sunday


## November 23
*Person taking notes: Henning*    
*Person leading the discussion: Dmytro*

Agenda:
* Sync/Refresh on project state
* Figure out what is needed to finish the assignment
* Plan next steps

Next features discussion:
* display data on map point hover 
* show number of incidents over time (years)
* visualize / investigate incidents by month (see if correlation with bird migration)
* incidents by flight phase
* incidents by airline
* incidents by bird species (pie chart)


Updates from Dmytro:

Next steps for Dmytro:
* write queries for new data that we need (Nov. 24)
* presentation slides

Updates from Henning:
* should leverage AWS secrets manager

Next steps for Henning:
* enforce linting on push (Nov. 28)
* leverage AWS secrets manager (Nov. 28)
* expose endpoints for new queries (Nov. 28)
* add additional testing to backend (Nov. 28)
* add logging to backend (Nov. 28)

Updates from Jacky:
* showing visualizations, discussion about what end product should look like

Next Steps for Jacky:
* add visualization on map point hover (Nov. 28)
* improve UI (Nov. 30)
* add responsiveness (Nov. 30)
* twitter widget

### Next steps
* Finish above next steps
* Then practice presentation


## November 03
*Person taking notes: Dmytro*    
*Person leading the discussion: Jacky*

Agenda:
* Go through the updates from everyone
* Figure out what is needed to finish the assignment
* Plan next steps

Updates from Dmytro:
* got a transformed CSV from Jacky and did EDA (expolarory data analysis)
* provisioned an AWS RDS instance, configured security groups
* loaded the data into the db, preaggregated it into the tables
* came up with queries

Updates from Henning:
* Deployed back and frontend and added CD
* Backend CD pipeline: a Docker image is built, the image is pushed to the repository (AWS ECR), and then to ECS.
* Frontend CD pipeline: Build static files and sends them to the S3 bucket. All done through GitHub Actions.

Next steps for Henning:
- Work on backend, use the queries that Dmytro added
- Create endpoints for Jacky
- Add Tests

Updates from Jacky:
* 3 visualizations ready right now:
  * We have a map. It requires coordinates, airport names, and # of bird strikes
  * Bar chart for Aircraft models. Needs a list of incidents
  * Total number of incidents and total fatality. Needs two separate numbers from the API

* Looked into prettier and linting.
* Will work on tests

### Next steps
Jacky needs to Provide typescript types to Henning for map markers. Will do tonight after dinner.
Once Henning gives an endpoint, Jacky will use real data and deploy it (merge to master).

Dmytro to send queries and credentials for data. Will do today.
Will work on the docs for A2.

Henning would use the queries and write endpoints + tests. Will do by Fri night.

## October 26
*Person taking notes: Henning*    
*Person leading the discussion: Jacky*

Agenda:
* Go through the updates from everyone
* Figure out what is needed to finish the assignment
* Plan next steps


Updates from Dmytro:
* Researched the ability to pull data constantly from the FAA page. Turned out they are using a MS access format, which is almost impossible to deal with, especially automate. Moreover, they do not update the database that often for us to parse it every day.

Updates from Henning:
* Played with AWS to configure CD
* Tried different services 
* Confirmed that we are running tests for each commit. We do not want to block pushes if tests fail, we only block the deployment.

Updates from Jacky:
* completed summary and incidents bar graph, looking at how to visualize map

### Next steps
Dmytro needs to provision the db and come up with queries by next week.   
Jacky needs to finish all three visualizations.   
Henning has to complete the whole CD pipeline and develop endpoints by Nov 4.  
 

## October 19
*Person taking notes: Jacky*    
*Person leading the discussion: Dmytro*

Agenda:
* Formalize deliverables in future milestones
	* Task, Assignee, Deadline, Success metric
* Pick out deliverables for this Assignment period
	
Features:

we will create tickets in project board for devs with perhaps more details

() = success metric

1. Data Visualization (visually pleasing, present, functional)
	* Interactive map with markers of incident locations and slidable timeseries so we can see the following:
		* num Incidents by year
		* num Injuries by year
	* Summary stats
		* Fatality rate, num incidents, interesting col stats
	* Horizontal bar chart of top aricraft types to injuries
2.  Responsiveness (remain functional and aesthetic on mobile down to 320px, tablet)
3.  Deployment
  	* implement web hook and deployment scripts to github repo
	* AWS amplify for frontend, unverified 
	* use other services for backend and job scheduler, TBD
	* (pushes to master automatically deploys working web app for desktop and mobile)
4.  Test Suite
	* (75% test coverage + bring up sensible edge cases in code reviews)
	* CI testing
		* Add github actions for merge criteria (cant merge into main w/out tests and lint passing)

5.  Daily Pull of FAA strike report 
	* Pulling file - job scheduler in AWS will do all 3, ultimately writing to DB
	* Transform into DB
	* Precomputing Visualization Data and writing to DB
	* (automatically executable without error every day)

6. Twitter iframe window [because there's an account that live tweets plane crashes](https://twitter.com/AviationSafety?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor)

A2 TODOs:
* Jacky works on Data Visualization
	* MVP for bar chart, summary stats, map. Need to make or outline all API calls to backend. Doesn't need to be pretty or responsive (Fri, Oct 28)
	* Report what frontend needs from backend (Wed, Oct 26)
* Henning sets up CI
	* CI/CD (Fri, Oct 28)
	* Backend endpoints (Wed, Oct 26)
* Dmytro works on pull and computation of FAA strike report, load into DB. Do not need to deliver daily pull for A2. (Sun, Oct 30)


Introspective:
* had trouble coming up with success metrics for testing
* discussed pre-commit/merge restrictions
	* enforced test coverage will slow down development 
* scrapped twitter API integration milestone, replaced with feature #5 above
	* discussed essence of why we wanted twitter live tweet stream feauture: basically we wanted some way to keep our users updated, our data relevant.
* discussed heroku vs AWS to host job that'll daily pull FAA strike report 


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


