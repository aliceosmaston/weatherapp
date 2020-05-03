# CodingTask
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.3.


I aimed to create an Angular app with two components:
	- Table - to display specified weather data from 10 cities
	- Graph - to display mean temperature from the same 10 cities

Data for table and graph should have been sourced from the openweathermap API therefore one service should be created to fetch data from the API and pass it to each component.

I managed to retrieve data from the openweathermap API for the graph but not for the table, meaning that I have two services. One service (weather.service.ts) collects data from the openweathermap API for the graph while the second service (city.service.ts) collects example data from a fake API for the table. I continued to create a table populated with the data from the fake API for the purposes of creating a table that met the criteria (sortable, with pagination, and a search filter).

I did not get as far as implementing unit tests for the search filter and configurable pagination. From the research I did about unit tests it seems that I should have created these two properties separate to the table itself in order to be able to test them in isolation.

I have enjoyed learning a huge amount about Angular, typescript, chart.js over the past week by completing online courses, watching YouTube tutorials and reading blog posts. 

Given that I had never used any of these before and my university finals begin next week (so I have been juggling coding with revision), I am happy with what I have learned and achieved over this period. Also, as my exams finish at the end of May, I know that I would have time to learn even more and brush up on essential skills prior to starting an internship with you.
