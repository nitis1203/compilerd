Certainly! Here's a revised version of the README file for Kalvium, focusing on guiding users through setting up and running the project:

---

# ![Kalvium](https://kalvium.community/images/sidebar-2d-logo.svg) Kalvium

## Table of Contents

1. [About The Project](#about-the-project)
2. [Quick Usage](#quick-usage)
3. [Contribution](#contribution)
   - [Prerequisites](#prerequisites)
   - [Setting Up](#setting-up)
   - [Making Changes](#making-changes)
   - [Running Tests](#running-tests)
   - [Guidelines](#guidelines)
4. [License](#license)

## About The Project

Compilerd is an online code judge that evaluates code submissions by compiling and executing them in various languages. It supports C++, Python, C, JavaScript (Node.js), and Java. Built with Node.js and Express, it's highly customizable and has been tested on Google Cloud Run for seamless performance.

## Quick Usage

To run the project locally and make a sample request:

- Clone the repository: `git clone <web-url>`
- Navigate to the project's root folder.
- Install dependencies: `npm install`
- Build Docker image: `docker build -t <tag> .`
- Run Docker container: `docker run -p 3000:3000 -e OPENAI_API_KEY=<your-api-key> -e ALLOWED_RAM=<allowed-ram-value> <image-name>`
- Access the service at: [http://localhost:3000/](http://localhost:3000/)
- Navigate to the frontend folder: `cd frontend`
- Start the frontend application: `npm start`
- Follow prompts to start on a different port if necessary.

## Languages Supported

- Java
- Node.js

## Contribution

### Prerequisites

Ensure the following dependencies are set up locally:

- [Node.js](https://nodejs.org/en/download)
- [Docker](https://docs.docker.com/get-docker/)
- [Postman](https://www.postman.com/downloads/)
- [Git](https://git-scm.com/downloads)

### Setting Up

- Fork the repository using GitHub UI.
- Clone the forked repository locally.

### Making Changes

- Create a new branch from the main branch: `git checkout -b <branch-name>`
- Make necessary changes and commit them: `git commit -am <commit-message>`

### Running Tests

To ensure changes are non-breaking:

- Build and run the server in a Docker container:
  - `docker build -t <tag-name> .`
  - `docker run -p 3000:3000 -e OPENAI_API_KEY=<your-api-key> -e ALLOWED_RAM=<allowed-ram-value> <image-name>`
- Execute test script: `node ./tests/test.js`

### Guidelines

- Provide detailed Pull Requests:
  - Clearly describe the problem or feature.
  - Offer context and background information.
- Adhere to coding standards and style guides.
- Update documentation as needed.
- Ensure contributions are well-tested.

## License

---

This version provides clear instructions for setting up, running, and contributing to the project, ensuring clarity and professionalism throughout.
