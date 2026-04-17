



Here are the primary tools and terms categorized by where they live in a modern web application.





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





