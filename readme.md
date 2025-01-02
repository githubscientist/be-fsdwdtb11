# Day - 36: Node JS Fundamentals

## Topics

- [x] What is MVC?
- [x] Split our existing code to MVC pattern
- [x] Follow upcoming code in MVC pattern
- [x] Getting Connected with MongoDB
- [x] What is Mongoose?
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

### What is Mongoose?

- Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js.
- It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.

### What is dotenv?

- Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env.


### JWT (JSON Web Token)

- JWT is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object.