<p align="center">
    <img src="https://gurzu.com/img/gurzu/mern-stack-01.png" alt="mongo" height="100" />
</p>
<h1 align="center">CODE COMPASS</h1>

<p align="justify">
Code Compass is a MERN (MongoDB, Express.js, React.js, Node.js) GitHub project that aims to provide a comprehensive platform for programming enthusiasts and learners. It incorporates various key features such as course selling, online judge, learning roadmap, and tree structure to create an all-in-one learning and collaboration environment. </p>

**Features:**

1. **Course Selling:** <p align="justify">Code Compass allows instructors to create and sell programming courses. The platform provides an intuitive course creation interface where instructors can upload course materials, organize lessons, and add quizzes or assignments. Students can browse through the available courses, enroll in their preferred ones, and track their progress as they go through the course content.</p>

2. **Online Judge:** <p align="justify">The online judge feature in Code Compass enables users to practice their coding skills and solve programming challenges. It provides a coding environment where users can write their code and submit it to be evaluated against a set of test cases. The online judge system automatically checks the correctness and efficiency of the submitted code, providing instant feedback to users.</p>

3. **Learning Roadmap:** <p align="justify">Code Compass includes a learning roadmap feature that guides users through a structured path of learning. It provides a curated set of topics, arranged in a logical order, to help users progress from basic to advanced programming concepts. The learning roadmap can be customized based on individual preferences and learning goals, ensuring a personalized learning experience.</p>

4. **Tree Structure:** <p align="justify">The tree structure feature in Code Compass allows users to visualize and navigate through various programming concepts, topics, and subtopics. It provides a hierarchical representation of the programming knowledge, making it easier for users to understand the relationships between different concepts and explore related topics. The tree structure can be expanded or collapsed based on user preferences, allowing for a flexible and intuitive learning experience.</p>

**Technology Stack:**

- **Front-end:** <p align="justify">The front-end of Code Compass is built using React.js, a popular JavaScript library for building user interfaces. React.js provides a component-based architecture, enabling modular and reusable code development. It allows for efficient rendering and provides a smooth and interactive user experience.</p>

- **Back-end:** <p align="justify">The back-end of Code Compass is developed using Node.js and Express.js. Node.js provides a runtime environment for executing JavaScript code on the server-side, while Express.js is a web application framework that simplifies the development of robust and scalable web APIs. Together, they facilitate server-side logic, data handling, and communication with the database.</p>

- **Database:** <p align="justify">Code Compass uses MongoDB, a NoSQL database, to store and manage its data. MongoDB offers flexibility and scalability, allowing for the efficient storage and retrieval of course materials, user information, learning progress, and other relevant data.</p>

- **Authentication and Security:** <p align="justify">Code Compass implements user authentication and security measures using industry-standard practices. It incorporates features like user registration, login/logout functionality, password encryption, and authorization to ensure secure access and protect user data.</p>

**GitHub Project:**

<p align="justify">Code Compass is hosted on GitHub, providing a collaborative environment for developers to contribute, improve, and expand the project. The project repository includes the complete source code, documentation, and guidelines for setting up and running the application. Developers can contribute by fixing bugs, implementing new features, or suggesting improvements through pull requests.</p>

<p align="justify">Code Compass aims to empower programming learners by providing a comprehensive platform that combines course selling, online judge, learning roadmap, and tree structure features. With its MERN stack implementation and collaborative development on GitHub, it aspires to create an inclusive and vibrant community of learners and instructors.</p>

## MERN App Installation

<p align="justify">This guide will walk you through the steps to install and run a MERN app on your local machine.</p>

## Prerequisites

<p align="justify">Before you begin, ensure that you have the following installed on your machine:</p>

- Node.js: https://nodejs.org
- MongoDB: https://www.mongodb.com

## Installation

<p align="justify">

1. Clone the repository:

   ```bash
   git clone https://github.com/SI-Abid/Code-Compass.git
   ```

2. Change into the project directory:

   ```bash
   cd <project_directory>
   ```

3. Install server dependencies:

   ```bash
   cd server
   npm install
   ```

4. Install client dependencies:

   ```bash
   cd ../client
   npm install
   ```

5. Configuration:

   - Create a `.env` file in the `server` directory.
   - Add the following environment variables in the `.env` file:

     ```plaintext
     PORT=5000
     ATLAS_URI=<your_mongodb_connection_uri>
     ```

6. Run the server:

   ```bash
   cd ../server
   npm start
   ```

   The server should start running at `http://localhost:5000`.

7. Run the client:

   ```bash
   cd ../client
   npm start
   ```

   The client should open in your default web browser at `http://localhost:5173`.
    </p>

## Usage

<p align="justify">You can now use the MERN app on your local machine. Explore the features and functionality provided by the app.</p>

## Contributing

<p align="justify">If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.

2. Create a new branch:

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. Make your changes and commit them:

   ```bash
   git commit -m 'Add some feature'
   ```

4. Push to the branch:

   ```bash
   git push origin feature/your-feature-name
   ```

   5. Create a pull request in the original repository.</p>

## License

<p align="justify">
[MIT License](LICENSE)
    </p>
