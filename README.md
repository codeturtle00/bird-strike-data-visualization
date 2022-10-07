# bird-strike-data-visualization

Repo for CSC302 Project on visualizing data

# Meeting Minutes

https://docs.google.com/document/d/1iZCAlgHwpPTVedkp7NX3-XFyfSQE5Fj-P6LcQLpQchI/edit?usp=sharing

# Running Application

To spin up development application, run `docker-compose -f docker-compose.dev.yml up`
To tear down, run `docker-compose -f docker-compose.dev.yml down --volumes`

To build development image, run `docker build . -t bird-strike-react:latest`
To run the container, run `docker run -it --rm -p 3000:3000 -v ${PWD}/src:/app/src -v /node_modules -e CHOKIDAR_USEPOLLING=true bird-strike-react:latest`
