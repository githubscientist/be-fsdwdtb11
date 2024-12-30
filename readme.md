# Day - 36: Node JS Fundamentals

## Topics

- [x] What is MVC?
- [ ] Split our existing code to MVC pattern
- [ ] Follow upcoming code in MVC pattern
- [ ] Getting Connected with MongoDB
- [ ] What is Mongoose?
- [ ] Creating & understanding Schemas using Mongoose

## Notes

### What is MVC?

- MVC stands for Model-View-Controller.
- It is a software design pattern that divides the program logic into three interconnected elements.

1. Model

- It represents the data structure.
- It is responsible for managing the data of the application.
- It responds to the request from the view and to the instructions from the controller to update itself.

2. View

- It represents the visualization of the data that model contains.
- It is responsible for displaying the data.
- It gets the data from the model and sends it to the view.

3. Controller

- It acts as an interface between Model and View components to process all the business logic and incoming requests.
- It receives the input, processes the input, and produces the output.

### Split our existing code to MVC pattern - Backend Application

1. Models: To represent the data structure.
2. Routes: To handle the incoming requests.
3. Controllers: To process the incoming requests.
