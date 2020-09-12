/*
1. The core features of Node.js and Express and why they are useful.
    Node is an open source development atmosphere for running Javascript code on the server side
    express is a framework that wraps a node.js application and it provides many features
    that can be accessed by a node.js application which saves the developer from writing long
    sequences of code.  

2. Understand and explain the use of Middleware?
    middleware in an express application can be used for many things, such as security, modifying
    request objects, and authentication all before moving onto moving onto a last function in a series of 
    functions.  In this way, it is possible to hold off sending a final response to client side
    until the developer's desired actions take place. 

3. The basic principles of the REST architectural style.
    REST stands for representational state transfer.  It is a list of recommendations, not a standard.
    It allows for the developer to make scalable applications that communicate with stateless protocol.
    It's management of resources is done with HTTP methods (get, post, put, delete, etc).
    It is client-server based architecture.

4. Understand and explain the use of Express Routers.
    When a route is made in an express application it is only executed when the url path reads whatever the 
    developer has written for it.  By assigning a route variable via express.Router() one can then write code
    for all basic CRUD operations for that variable, then export it for the root index file to import and assign
    to whatever path desired in that file. 

5. Describe tooling used to manually test the correctness of an API.
    Tooling software like Postman can be used to test all the endpoints made on an API.  By passing in javascript objects
    to endpoints such as post, for example, it gives the developer the ability to ensure their code is working correctly,
    including any error paths they've written.
*/