# Comprehensive API CRUD Operations Test Suite using Mocha Framework

This test suite is a comprehensive solution for automating the testing of CRUD (Create, Read, Update, Delete) operations of an API. It utilizes the robust Mocha framework, the promise-based HTTP client Axios, and the Chai assertion library. The test scripts are written in JavaScript, providing a familiar and flexible environment for developers.

**Axios** is a renowned HTTP client that simplifies the process of sending requests and receiving responses from the server. Its support for promises makes it an excellent choice for integrating and testing APIs, as it allows for asynchronous operations and better handling of responses.

**Mocha** is a versatile JavaScript test framework that can run on both Node.js and in the browser. It simplifies asynchronous testing by running tests serially, which allows for more flexible and accurate reporting. It also maps uncaught exceptions to the correct test cases, making it easier to identify and fix issues.

**Chai** is a popular assertion library that pairs exceptionally well with Mocha. It allows developers to use natural language constructs when writing tests, making the tests easier to write and read.

**CRUD operations** are the backbone of most data-driven applications. They are essential for manipulating resources in an API, and thus, thorough testing of these operations is crucial for the reliability of the application.

## Prerequisites

Before you can run the test suite, ensure that Node.js and npm are installed on your local machine.

## Technology Stack

- **Axios**: A promise-based HTTP client for making requests to the API.
- **JavaScript**: The programming language used to write the test scripts.
- **Visual Studio Code**: The recommended code editor for this project.
- **Mocha Framework**: The testing framework used to structure and run the tests.
- **Mochawesome**: A Mocha reporter that generates a comprehensive HTML/CSS report, providing a visual representation of the test suites.

## API Routes

The test suite covers the following API routes:

- **GET /posts**: Retrieves all posts.
- **GET /posts/1**: Retrieves a specific post.
- **GET /posts/1/comments**: Retrieves comments for a specific post.
- **POST /posts**: Creates a new post.
- **PUT /posts/1**: Updates a specific post.
- **DELETE /posts/1**: Deletes a specific post.


## Setup

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the dependencies by running the following command:

   ```
   npm install
   ```

## Running the Tests

To run the test suite, execute the following command:

```
npm test
```

The tests will be executed, and the results will be displayed in the console.

## Test Cases

The test suite includes the following test cases:

- `get all posts`: This test case verifies that all posts can be retrieved successfully from the API.
- `get post by postId`: This test case verifies that a specific post can be retrieved successfully from the API.
- `get comments by postId`: This test case verifies that comments for a specific post can be retrieved successfully from the API.
- `Create a new post`: This test case verifies that a new post can be created successfully in the API.
- `update post by postId`: This test case verifies that a specific post can be updated successfully in the API.
- `delete post by postId`: This test case verifies that a specific post can be deleted successfully from the API.



## Reporting

The test suite generates test reports in the Mochawesome format. You can view the test reports in the console output or in the generated HTML report. Mochawesome provides a full-fledged HTML/CSS report that helps visualize your test suites.

## Mochawesome Report:
<img width="1440" alt="Screenshot 2023-10-19 at 12 24 58 AM" src="https://github.com/Ksagor29/Api-automation-using-mocha-framework-1/assets/83920086/20d492ad-6564-4d02-8188-33c04a73f067">

## Video Output:


https://github.com/Ksagor29/Api-automation-using-mocha-framework-1/assets/83920086/6faeee6d-c1a8-4952-8658-d461e6a03695

