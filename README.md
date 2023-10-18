# API-automation-using-mocha-framework
# API CRUD Operations Test Suite using Mocha Framework

This test suite provides a structure for automating the testing of API's CRUD (Create, Read, Update, Delete) operations leveraging the power of the Mocha framework, Axios as the HTTP client, and Chai assertion library. All the test scripts are written in JavaScript making it easy to understand and adapt.

**Axios** is a powerful HTTP client that aids in generating requests and handling responses effectively. It supports promises making it a go-to choice for APIs integration and testing.

**Mocha** is a feature-rich JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple and fun. Mocha tests run serially, allowing for flexible and accurate reporting, while mapping uncaught exceptions to the correct test cases.

**Chai** is an assertion library which pairs greatly with Mocha providing the ability to use natural language constructs for your tests. It makes writing tests an easier and more readable experience.

The **CRUD operations** are the critical components for most functional data-driven applications. API's need these basic operations to manipulate resources.

## Prerequisites

- Node.js and npm installed on your local machine.

## Tech Stack

- Axios - Promise based HTTP client
- JavaScript - Programming language
- Visual Studio Code - Code editor
- Mocha Framework - JavaScript test framework
- Mochawesome - A Mocha reporter that generates a full fledged HTML/JSON report that helps visualize your test suites.

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