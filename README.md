# Student-Task-Management-System
## Software Development Life Cycle (SDLC)

The **Student Task Management System (STMS)** was developed using the Software Development Life Cycle (SDLC) approach. SDLC provides a structured framework that ensures the system is properly planned, designed, implemented, tested, deployed, and maintained.

---

### 1. Requirement Analysis

This phase involved identifying the objectives of the Student Task Management System and understanding user needs.

#### Functional Requirements
- The system shall allow a student to add a new task.
- The system shall display all added tasks.
- The system shall allow a student to mark a task as completed.
- The system shall allow a student to delete a task.

#### Non-Functional Requirements
- The system shall be simple and easy to use.
- The system shall have fast response time.
- The system shall run on modern web browsers.
- The system shall work without a backend server.

---

### 2. System Design

In this phase, the structure and behavior of the system were defined.

#### System Architecture
The Student Task Management System is designed as a **single-page, client-side web application**.

#### Technologies Used
- **HTML** for structuring the web interface.
- **CSS** for styling and layout.
- **JavaScript** for logic and interactivity.

#### Design Components and Nomenclature
| Component / Function | Description |
|---------------------|-------------|
| `taskInput` | Input field for entering a task |
| `addTask()` | Adds a new task to the task list |
| `displayTasks()` | Displays all tasks |
| `completeTask()` | Marks a task as completed |
| `deleteTask()` | Removes a task from the list |

These names were consistently used during implementation.

---

### 3. Implementation

The implementation phase involved converting the system design into working code.

The project was implemented using:
- `index.html` for page structure
- `style.css` for user interface styling
- `script.js` for application logic

JavaScript functions such as `addTask()`, `displayTasks()`, `completeTask()`, and `deleteTask()` were implemented to manage task operations.

---

### 4. Testing

Testing was carried out to ensure the system meets the specified requirements.

#### Test Scenarios
- Attempting to add an empty task displays an alert.
- Adding a valid task displays it correctly.
- Clicking on a task marks it as completed.
- Clicking the delete button removes the task.

All test cases passed successfully.

---

### 5. Deployment

The system was deployed by uploading the project files to a GitHub repository.  
Users can access the project by opening the `index.html` file locally or via GitHub Pages.

---

### 6. Maintenance

The maintenance phase involves improving the system after deployment.

Possible future improvements include:
- Saving tasks using browser Local Storage
- Adding task deadlines and categories
- Improving user interface design
- Adding user authentication

---

### Conclusion

Applying the SDLC methodology ensured that the Student Task Management System was developed in an organized and structured manner. Each SDLC phase contributed to building a functional, reliable, and user-friendly application.
