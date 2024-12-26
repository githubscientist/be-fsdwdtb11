# Day - 36: Node JS Fundamentals

## Topics

- [x] What is Node JS?
- [x] Understanding Nodemodules
- [x] Package.json , package-lock.json
- [x] Dependencies Vs dev dependencies
- [ ] Built In , third party & custom packages
- [ ] Filesystem in nodejs
- [ ] http module

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

- `devDependencies` are the packages that are only required during development.
- Dev dependencies are required during development. They are local dependencies.

### Let us install a package

- Run `npm install package_name` to install a package
- Package example: `npm install body-parser`
