# Day - 36: Node JS Fundamentals

## Topics

- [x] What is Node JS?
- [x] Understanding Nodemodules
- [x] Package.json , package-lock.json
- [x] Dependencies Vs dev dependencies
- [x] Built In , third party & custom packages
- [ ] http module
- [ ] Filesystem in nodejs

### What is Node JS?

- Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.
- Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser.(Server side rendering)

### Version Numbering

1.0.0

- 1 - Major Version: Breaking changes
- 0 - Minor Version: New features
- 0 - Patch Version: Bug fixes

### Setting up Node Application

- Install Node.js from [Node.js](https://nodejs.org/en/)
- Check the version of Node.js using `node -v` or `node --version`
- Check the version of npm using `npm -v` or `npm --version`
- Create a new directory for the project and navigate to the directory using `cd directory_name`
- Run `npm init` to create a new Node.js project

### Package.json

- `package.json` is a file that gives the necessary information to npm which allows it to identify the project as well as handle the project's dependencies.

### Package-lock.json

- `package-lock.json` is automatically generated for any operations where npm modifies either the `node_modules` tree or `package.json`.

### Dependencies Vs dev dependencies

- `dependencies` are the packages that are required for the application to run.
- Dependencies are required at runtime. They are global dependencies.
- Use `npm install package_name` to install a package as a dependency

- `devDependencies` are the packages that are only required during development.
- Dev dependencies are required during development. They are local dependencies.
- Use `npm install -D package_name` to install a package as a dev dependency

### Let us install a package

- Run `npm install package_name` to install a package
- Package example: `npm install body-parser`

### Built In , third party & custom packages

- `Built In Packages`: These are the packages that are available by default in Node.js
- Example:

  - `fs` - To handle the file system
  - `http` - To create a server(http server)
  - `path` - To handle file paths
  - `os` - Examples: To get the information about the operating system (os.mkdir(), os.rmdir())

- `Third Party Packages`: These are the packages that are not available by default in Node.js and are created by the community.
- Example:

  - `express` - To create a server
  - `body-parser` - To parse the body of the request
  - `nodemon` - To restart the server automatically
  - `mongoose` - To connect to MongoDB
  - `mysql` - To connect to MySQL
  - `cookie-parser` - To parse the cookies
  - `cors` - To enable CORS
  - `dotenv` - To load environment variables
  - `jsonwebtoken` - To generate JWT tokens
  - `bcrypt` - To hash the password
  - `multer` - To upload files
  - `morgan` - To log the requests
  - `nodemailer` - To send emails

- `Custom Packages`: These are the packages that are created by the developer.
- Example:

  - `my-package` - Custom package created by the developer
  - `logger` - middleware to log the requests
  - `auth` - middleware to authenticate the user using JWT and passport
  - `upload` - middleware to upload files
  - `db` - middleware to connect to the database

### Imports

- There are two types of imports in Node.js
  - ES6 Imports
    - `import express from 'express';`
    - `import { Router } from 'express';`
    - File extension should be `.mjs`
    - for exporting use `export default` or `export { Router };`
  - CommonJS Imports
    - `const express = require('express');`
    - `const { Router } = require('express');`
    - File extension should be `.js`
    - for exporting use `module.exports` or `exports.Router = Router;`

### Date Comparison in MongoDB

- To compare dates in MongoDB, we can use the `$gte` and `$lte` operators.
- Example:

```javascript
db.collection.find({
  createdAt: {
    $gte: new Date("2021-01-01"),
    $lte: new Date("2021-12-31"),
  },
});
```

- ISODate format: `2021-01-01T00:00:00.000Z`
- ISODate means the date is in UTC format (ISO means International Standard Organization)
