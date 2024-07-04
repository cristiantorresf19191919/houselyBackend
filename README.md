# Housely

## Project

* **Description:**
  `Bakcend for housely app.

* **Development Tools:**
    - Node.js
    - Express.js
    - TypeScript
    - TypeDi >> DI simplistic dependency injection

## Backend Structure

* **Controllers:**
  This is where the request handlers are located. They receive an HTTP request and provide the HTTP response.

* **Gateways:**
  Contains `<gateway-name>`, this layer is responsible for communicating with external services.

* **Services:**
  Contains `<service-name>`, external dependencies like bcrypt or jsonwebtoken or twilio if a library is vulnerable or dependency only will affect this layer not the entire app 

* **Repositories:**
  Contains `<repository-name>`, in charge of data manipulation and storage with mongo using mongoose as external dependency.
