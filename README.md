[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/OXRciB05)
## Docker Introduction Assignment

### Objective
In this assignment, you will work with Docker to containerize a simple Node.js web server. You will learn to:
- Build a Docker image
- Run a Docker container
- Expose ports for accessing the web server
- Persist logs from within the container

### Prerequisites
Ensure you have Docker Desktop installed on your machine. If you haven’t already installed it, follow the instructions on the [Docker website](https://www.docker.com/products/docker-desktop) to do so.

### Instructions

1. **Fork the Repository**:
   - You should have received an invitation link to this assignment. Click the link and accept the assignment.
   - After accepting, GitHub will create a personal repository based on the template. Clone your repository to your local machine:
     ```bash
     git clone https://github.com/YOUR-GITHUB-USERNAME/docker-introduction-assignment.git
     cd docker-introduction-assignment
     ```

2. **Explore the Project Structure**:
   - Inside the project, you’ll see the following structure:
     ```bash
     docker-introduction-assignment/
     ├── src/
     │   └── server.js
     ├── logs/
     ├── Dockerfile
     ├── package.json
     └── README.md
     ```
   - The `src/` directory contains the Node.js web server.
   - The `logs/` directory is where the application will store logs when running.
   - The `Dockerfile` defines the instructions to build and run the Docker container.

3. **Understand the Web Server**:
   - The web server in `src/server.js` listens on port `3000` and responds with "Welcome to Docker" when accessed via a browser or HTTP request.
   - The server also logs each request to the `logs/access.log` file inside the container.

4. **Build the Docker Image**:
   - Now, you will build the Docker image for this project. Run the following command to build the image:
     ```bash
     docker build -t simple-node-app .
     ```
   - This command uses the `Dockerfile` in the root directory to build the image and tag it as `simple-node-app`.

5. **Run the Docker Container**:
   - After building the image, run the Docker container, mapping port `3000` on the container to port `3000` on your local machine. Additionally, mount the `logs/` directory to persist the logs on your host machine:
     ```bash
     docker run -d -p 3000:3000 -v $(pwd)/logs:/app/logs simple-node-app
     ```
   - This command:
     - Runs the container in detached mode (`-d`).
     - Maps port `3000` from the container to port `3000` on your machine (`-p 3000:3000`).
     - Mounts the `logs` directory from your machine into the container (`-v $(pwd)/logs:/app/logs`).

6. **Test the Web Server**:
   - Open your browser and navigate to `http://localhost:3000`, or use the following `curl` command to test:
     ```bash
     curl http://localhost:3000
     ```
   - You should see the response: `Welcome to Docker`.

7. **Check the Logs**:
   - After making a few requests, check the `logs/access.log` file in your project directory. You should see entries for each request made to the server, similar to:
     ```
     Request received at 2024-10-27T10:23:59.000Z
     ```

8. **Stop the Docker Container**:
   - To stop the container, find its `container ID` by running:
     ```bash
     docker ps
     ```
   - Then stop it using:
     ```bash
     docker stop <container-id>
     ```

9. **Submit Your Work**:
   - Once you’ve confirmed the container runs correctly and the logs are being written, commit and push your changes:
     ```bash
     git add .
     git commit -m "Completed Docker assignment"
     git push origin main
     ```
   - Your submission will be automatically graded based on the configuration set up for this assignment.

### Grading Criteria (5 Points Total)
- **1 point**: Dockerfile correctly exposes port 3000.
- **1 point**: The Docker image builds successfully.
- **1 point**: The container runs successfully and is accessible on `localhost:3000`.
- **2 points**: The HTTP response is correctly returned as `Welcome to Docker`.

---
