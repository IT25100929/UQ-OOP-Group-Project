Project plan



19/04



create the front end and the back end piece by piece

make a rough design of the each page which manages the required functions of the system

1. Select a function to implement

2\. Make the spring boot with relevant classes

3\. after create the react frontend for it

### 

### 

### **Here are the primary tools and terms categorized by where they live in a modern web application.**





\## **1. The Frontend (Client-Side)**

This is everything that runs in the user's browser. It focuses on the  User Interface (UI)  and  User Experience (UX) .



\### **The "Big Three" (Fundamentals)**

HTML (HyperText Markup Language):  The skeleton of the page (buttons, text, inputs).

CSS (Cascading Style Sheets):  The skin (colors, layout, spacing).

JavaScript (JS):  The muscles. It makes the page interactive without reloading.



Bootstrap / Tailwind: CSS frameworks used to make your site look modern without writing thousands of lines of custom design code.



\### **Frameworks \& Libraries**

React:  The most popular UI library (created by Meta). It uses a "component-based" approach, which feels very similar to Java's OOP.

Angular:  A full-blown framework by Google. It is written in  TypeScript  and uses heavy OOP patterns (like dependency injection), making it a favorite for Java developers.

Vue.js:  A progressive framework known for being easy to pick up.

Next.js:  A framework built on top of React that handles performance and SEO (Server-Side Rendering).



\### **Important Terms**

DOM (Document Object Model):  The tree structure of your HTML that JavaScript interacts with.

Responsive Design:  Ensuring the site looks good on both iPhones and 4K monitors (usually handled by  Tailwind CSS  or  Bootstrap ).

SPA (Single Page Application):  A website that feels like a desktop app because it never fully reloads the page.



\---



\## **2. The Backend (Server-Side)**





**### Frameworks (Java Focus)**

Spring Boot:  The gold standard for Java web apps. It handles the server, security, and database connections. This is used instead of the old school Servlets and JSP.

Jakarta EE (formerly J2EE):  The enterprise standard for Java applications.

Node.js:  A way to run JavaScript on the server (very popular for startups).

Django / Flask:  Popular frameworks for Python.



**### Data \& Communication**

REST API:  The "language" the frontend and backend use to talk to each other.

JSON (JavaScript Object Notation):  The text format used to send data (e.g., `{"name": "Gemini", "age": 2}`).

Authentication:  Terms like  JWT (JSON Web Tokens)  or  OAuth2  (the "Log in with Google" buttons).



**### Databases**

Relational (SQL):  PostgreSQL, MySQL, Oracle. Great for structured data (like banking).

Non-Relational (NoSQL):  MongoDB, Redis. Great for flexible, fast-changing data.



\---



\## **3. The "Glue" (DevOps \& Tools)**

These tools help you build, test, and put your app on the internet.



**### Development Environment**

Git / GitHub:  Version control. Essential for saving your progress and collaborating.

Build Tools (Java):\*Maven  or  Gradle . These manage your libraries and compile your code.

IDE:\*IntelliJ IDEA  (Best for Java) or  VS Code  (Best for Frontend).



**### Deployment**

Docker:  "Containers" that make sure your app runs the same on your laptop as it does on the server.

Cloud Providers:  AWS (Amazon), Google Cloud, or Azure.

CI/CD:  Automated pipelines that test and update your website every time you push code.



### **Telusko youtube playlist**



\#3 threads, exception handling, collections
when using frameworks there are build tools that we need to use = maven, gradle



\#4 Ioc(inversion of Control) - principle and DI (dependency injection) - actual implementation of IoC

IOC handle object creation, managing. we dont have to care about it.
DI simply means someone else is injecting the object in your application

constructor injection
setter injection
field injection



Controller classes - accept client request
Service classes - business logic
Repositories - connect with DB



\#5 in early days when using spring/spring framework we had to do the configuration part in the beginning of the project to get started, to solve this problem spring boot was invented. The layer on top of spring framework can be considered spring boot. we also dont need a tomcat server because of spring boot. behind the scenes springboot is still spring framework.

IntelliJ ultimate lets you create a spring boot project directly. ALternative is the spring initializer.

postman to test or open from the browser as localhost:8080



\#6
IoC/Spring container is inside the JVM. This is the container where spring creates objects. Springapplication.run

run also returns the object of application context



@component in the class of the object you want to create - spring framework creates an object of this class in the applicationcontext container(IoC container)

if we use the new keyword to create an object, it gets created outside of the IoC container, which we do not want.



\#7
@autowired - instead of the new keyword when creating an object. this is used to connect classes.

field injection - need to use autowired
constructor injection (recommended) - no need autowired.
setter injection (recommended) - need to use autowired



@Primary - your preferred class to be executed, coded in the preferred class



@Qualifier("class name with simple letters / bean name") - written in the class(not bean name class, lets say whole class) where you want it (bean name class) to be connected to



\#8

spring boot uses maven

spring framework without spring boot also uses maven

when we create a spring project in IntelliJ ultimate it creates a spring boot project

we can also use gradle instead of maven if you prefer

\#11 (12th video in the playlist)
didn't watch this video properly

\#12
Servlets
Tomcat
client sends requests and server sends responses, this is achieved by HTTP protocol. Therefore our application should be in a server (you cant just run it on the JVM). In java we use servlets. Servlets run in the web container. we need to use tomcat to run servlets. When using Spring, behind the scenes spring is using servelts and it will run on tomcat.

Controller is a special class - accepts requests from clients and also respond

\#13  printing on the web page for the first time
@Controller - sends data with the layout (like earlier days). to learn more about what controller means watch the video.
@RestController - to send only data, not with the layout. typed near the class.
@ResponseBody - to send only data, not with the layout. typed near the method.

if we also want to get the layout/page we can use thymeleaf or jsp. from this we can create the pages here and return them by mentioning the names here.
But we dont want to return the layout/page because it is there in the react appliaction, what we want to return is the data.

for different requests we specify different methods.

we can have multiple contollers. we dont have to put every request in one controller.

Spring creates for you and gives another controller which we cant see called the front controller. the request goes to this controller before going to any other controller.

\#14
Lombok
pom.xml to handle dependencies
when you want to add a new dependency to pom.xml and dont remember the groupid and artifcatid and all that you can go the website called mvnrepository.
after copying and pasting the dependency clikc on maven reload button in intellij.

@Data

You should not write any business logic inside the controller. Controller is only to accept requests from client and respond to client.
business logic is written in the service class.

Product class should be in the model package. Model represents the data. Product class represents the data.

Once we start with database we also create a repository package.

@AllArgsConstructor - feature of lombok, it creates all argument constructor.

There are a lot of things in this video, and i am too lazy to write everything here.

@Service - creates an object of the class, same as component but used in the service class.

@autowired - to create an object of another class inside another class. This was used in a previous video too.

talked about a little bit of API at the end.

\#15
Rest API uses HTTP which has certain methods.
to fetch (#22 0:12 he meant sending data to the website, also i explained this in #16) GET
to store on the server POST
to update PUT
to delete DELETE

there are other methods as well but these are the four that we normally use.

CRUD,
create - post
read- get
update - put
delete - delete

when we pass a url in the browser we send the get request.

Postman

7.56 - about stream()

By default method is GET

instead of @RequestMapping we can use @GetMapping for GET
@PostMapping

creating a JSON file in postman

@RequestBody

\#16
GET - client(browser/ API client like postman) getting
POST - client sending, backend getting

@PutMapping
@DeleteMapping



\#17
Repository layer is responsible to connect the database
in earlier days we have to use DBMC - Java Database Connectivity. Using this we can connect java code with the database, to do this we have to do 7 step (load driver, connect to DB, Create Query, execute query, process). all this lengthy code is done in the repository layer.

SPring framework has SPring JDBC, if we use this instaed of normal JDBC it will be easy.

This can be done in a more easy way with the use of ORM (Object Relational Mapping)

ORM is done by a ORM tool (Hibernate(Most famous), EclipseLink, MyBatis)

because these ORM tools have a standard (JPA - Java persistence API) it is very easy to move between different ORM tools. so we use Spring data JPA.
BEcause of this storing data in the DB becomes very very easy.

Databases that we can use - H2, PostgreSQL, MySQL. For this we are using H2.

\#18
connector (h2 driver) - connect databse with our spring application
also create a reposiroty layer

when adding a new dependency to the created project you can also go to the sprin initializer and create a project by adding those dependencies, without donwloadg the project
just go to the explore and copy the relevant dependecny from the pom.xml file and paste it in the current project pom.xml

when you connect with database you have to specify the url in application.properties
also specify the driver class name in application.properties

H2 setup

\#19
Because of hibernate, when we need class of we need to create a table in the databse we need to add @Entity to that class (while keeping @Component which is already there)
@Id for the primary key variable

to see the query that is implemented in the background we can use - spring.jpa.show-sql = true

to change the username and password of the H2 database use, spring.datasource.username = seran
spring.datasource.password = 123heheh

\#20

frontend is already made with react

react with vite in the frontend coded in vs code

componenets in react have their layout and their own functionality
in javascript world everything happens with the help of functions

frontend website shows issues because backend is not there

\#21
not in H2 but in permanent databases like progresql and MySQL we dont want to create an already existing table, so we use spring.jpa.hibernate.ddl-auto = update

using Lombok
to the product class
@Data
@AllArgsConstructor
@NoArgsConstructor

also to get the table @Entity
i dont know why he didn't add @Component

and also @Id to make private int id the primary key

\#22
@RequestMapping on the controller

@AUtowired on top of the object variable (field injection) which is not recommended. recommended to use constructor or a setter injection

@GeneratedValue on top of private int id to auto generate values in that field

in h2 to keep the data even after the program is stopped we can create a file in reasources called data.sql and paste the query of "insert into" to that file.

after spring boot 2.7 H2 tries to insert values to the table before creating the table, so to avoid that in the application.properties, spring.jpa.defer-datasource-initialization = true
(data initialization happens after creating the table)

\#23
CORS error - Cross origin Resource sharing

to avoid this, we can solve this issue from both the client side and the server side
from the server side, we can type @CrossOrigin on top of the productcontroller class. then when you refresh the frontend which has the port number 5173 (spring boot has 8080) it will display the frontend which was made using react.

\#24
7:00 @JsonFormat on top of private Date releaseDate to show the date in a user friendly format

9:00 to see how to send the status (eg- 200 OK, 400 file not found)

\#25
watch from here















* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 
* 

### **Full Stack Spring Boot and React CRUD 1.5 hours Course | Full Stack Web App | MySQL | Hibernate**





18:50 install Node and npm



43:00 react router dom







