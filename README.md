# React todo list 

## Overview
This Todo List project is built based on React, and CSS using Bootstrap to make everything looks better. The app allows users to add, delete, edit and clear todo items.
![Alt text](https://github.com/yyutang/React-Todo-List/blob/main/img/readme.png)

## Getting Start
#### Prerequisites
- Node.js installed on your machine.
- npm (comes with Node.js)

#### Installation
- create a react project: https://reactjs.bootcss.com/learn/start-a-new-react-project 
```
npx create-react-app <my-app-name>
cd <my-app-name>
npm start
```
- Or you can clone this repo to start
(Quickly start react projects without all the unnecessary files): https://github.com/alphariaz61/react-starter

## Code Structure
- main files(src/):
	- App.jsx: The root component of the app, manages the state of the todo list.
	- List.jsx: A component that represents a single todo item in a list
	- Form.jsx: A component that represents input and submit
- main functions:
	- add
	- delete
	- clear (clear all items in list)
	- edit (edit item in a window alert)
