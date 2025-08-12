# Angular TaskTracker

A responsive and dynamic task tracking web application built with Angular.  
This project demonstrates core Angular concepts such as components, services, routing, event binding, and HTTP requests, while integrating with both a mock backend (json-server) for local development and a live backend API deployed on Render.

[Live Demo](https://tylerchasefranklin.github.io/Angular-TaskTracker/)

---

## Features

- View, add, and delete tasks
- Toggle task reminders
- Responsive UI for desktop and mobile
- Mock backend using json-server for local development
- Live backend via Render for production
- Angular best practices: components, services, routing, event binding, HTTP requests

---

## Screenshots

<!-- Add screenshots here as the project evolves! -->
<!-- ![Task List Screenshot](screenshots/task-list.png) -->
<!-- ![Add Task Screenshot](screenshots/add-task.png) -->

---

## Getting Started

### Prerequisites

- Node.js & npm
- Angular CLI

### Installation

```bash
git clone https://github.com/tylerchasefranklin/Angular-TaskTracker.git
cd Angular-TaskTracker
npm install
```

### Backend Setup

#### **Deployed App**

- The deployed version of this app uses a live REST API hosted on Render:  
  [https://angular-tasktracker-api.onrender.com/tasks](https://angular-tasktracker-api.onrender.com/tasks)

#### **Local Development**

- For local development, use the included `json-server` mock backend:
  ```bash
  npm run server
  ```
  By default, this runs at [http://localhost:5000/tasks](http://localhost:5000/tasks).

- To switch between local and deployed backends, update the `apiUrl` in `src/app/services/task.service.ts` as needed:
  ```typescript
  // For local development:
  private apiUrl = 'http://localhost:5000/tasks';
  // For production (default):
  private apiUrl = 'https://angular-tasktracker-api.onrender.com/tasks';
  ```

### Run the App Locally

```bash
ng serve
```

Then open [http://localhost:4200/](http://localhost:4200/) in your browser.

---

## Available Scripts

- `ng serve` — Runs the Angular app locally
- `npm run server` — Starts the mock backend (json-server)
- `ng build --base-href /Angular-TaskTracker/` — Builds the app for production with correct GitHub Pages base path
- `npx angular-cli-ghpages --dir=dist/Angular-TaskTracker` — Deploys to GitHub Pages

---

## Technologies Used

- Angular
- TypeScript
- json-server
- RxJS
- Angular CLI

---

## Project Structure

```
src/
  app/
    components/
    services/
    models/
    ...
  assets/
  environments/
db.json
...
```

---

## Future Improvements

- Edit/update tasks
- Task filtering and sorting (by status, priority, date)
- User authentication
- Drag-and-drop for task ordering
- Persistent backend (Node.js/Express + MongoDB or Firebase)
- Unit & E2E testing
- Improved accessibility and UI/UX

---

## License

MIT License

---

## Author

[Chase Franklin](https://github.com/tylerchasefranklin)