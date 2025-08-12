# Angular TaskTracker

A responsive and dynamic task tracking web application built with Angular.  
This project demonstrates core Angular concepts such as components, services, routing, event binding, and HTTP requests, while also integrating with a mock backend using json-server.

[Live Demo](https://tylerchasefranklin.github.io/Angular-TaskTracker/)

---

## Features

- View, add, and delete tasks
- Toggle task reminders
- Responsive UI for desktop and mobile
- Mock backend using json-server
- Angular best practices: components, services, routing, event binding, HTTP requests

---

## Screenshots

<!-- Add screenshots here -->
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

### Run the Mock Backend

This project uses [json-server](https://github.com/typicode/json-server) to mock a REST API backend.

```bash
npm run server
```

By default, the mock backend runs at [http://localhost:5000](http://localhost:5000).

### Run the App

```bash
ng serve
```

Then open [http://localhost:4200/](http://localhost:4200/) in your browser.

---

## Available Scripts

- `ng serve` — Runs the Angular app locally
- `npm run server` — Starts the mock backend (json-server)
- `ng build` — Builds the app for production
- `ng deploy` — Deploys to GitHub Pages

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
