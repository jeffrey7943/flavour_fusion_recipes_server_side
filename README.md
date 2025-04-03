# flavour_fusion_recipes_server

this repository contains the server-side code for flavour_fusion_recipes. built using node.js, express, and mongodb, it handles api requests, user authentication, and database interactions for storing and retrieving recipes.

## features

- user authentication (registration, login, jwt-based authentication)
- create, read, update, and delete (crud) operations for recipes
- secure storage and retrieval of user data
- api endpoints for interacting with the frontend
- mongodb integration for storing recipe and user data

## technologies used

- node.js - runtime environment
- express.js - backend framework
- mongodb - database for storing recipes and users
- jsonwebtoken - authentication handling
- dotenv - environment variable management

## installation

1. clone the repository:

   ```
   git clone https://github.com/jeffrey7943/flavour_fusion_recipes_server_side.git
   ```

2. navigate to the server directory:

   ```
   cd server_side
   ```

3. install dependencies:

   ```
   npm install
   ```

4. create a **.env** file and add the following environment variables:

   ```
   PORT=your_desired_port
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```

5. start the server:

   ```
   npm start
   ```

## API endpoints

| method | endpoint           | description                 |
| ------ | ------------------ | --------------------------- |
| post   | /api/auth/register | user registration           |
| post   | /api/auth/login    | user login                  |
| get    | /api/recipes       | fetch all recipes           |
| get    | /api/recipes/:id   | fetch a single recipe by id |
| post   | /api/recipes       | add a new recipe            |
| put    | /api/recipes/:id   | update a recipe             |
| delete | /api/recipes/:id   | delete a recipe             |

## contributing

if you'd like to contribute, feel free to fork the repository and submit a pull request.
