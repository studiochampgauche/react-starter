# React Single Page App (SPA) with Page Transitions

## Guide
1. Clone this repo
1. Install your node modules `npm i`
2. Run your project locally `npm run start`


## Smooth Transitions between Pages
Manage animations between your page with GSAP from Transitor.jsx. Fluid fadeOut/fadeIn is set by default on <main> HTML Element.

Call transition by adding `data-transition="true"` to your elements. If elements don't have `href` attribute, add `data-to` attribute on each.


## GSAP SmoothScroller Ready
The ScrollSmoother Plugin from GSAP Club is ready to work with Page Transitions. Put a look on Scroller.jsx component. You'll need a GSAP Premium Licence for use it.


## Backend approach
If you need a backend:

1. create a `frontend` and `backend` directories on the root of your project.
2. Place your React App inside the frontend and your admin files inside the backend. Your backend can be in JavaScript, PHP, etc.
3. Run a local (or online) server for your frontend app. You can automaticly do that with this repo. Use command `npm run start`.
4. Run a local (or online) server for your backend.
5. Use proxy from package.json to call your admin url when you fetch between your frontend and backend if needed.