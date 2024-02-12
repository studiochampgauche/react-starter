# React Single Page App (SPA) with Page Transitions

## Guide
1. Clone this repo
1. Install your node modules `npm i`
2. Run your project locally `npm run start`

## Backend approach
If you need a backend:

1. create a `frontend` and `backend` directories on the root of your project.
2. Place your React App inside the frontend and your admin files inside the backend. Your backend can be in JavaScript, PHP, etc.
3. Run a local (or online) server for your frontend app. You can automaticly do that with this repo. Use command `npm run start`.
4. Run a local (or online) server for your backend.
5. Use proxy from package.json to call your admin url when you fetch between your frontend and backend if needed.