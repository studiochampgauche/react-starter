# React Starter

## Guide
1. Clone this repo
1. Install your node modules `npm i`
2. Run your project locally `npm run start`


## Features

### Single Page App
Import `{ Link }` or `{ useNavigate }` from `react-router-dom` and use them for load your pages without reloading. For examples, we use useNavigate() in Transitor.jsx in a specific moment and `<Link>` in Nav.jsx.

### Smooth Transitions between Pages
Manage animations between your pages with GSAP in Transitor.jsx. Fluid fadeOut/fadeIn is set by default on `<main>` HTML Element.

Call transition by adding `data-transition="true"` to your elements. If elements don't have `href` attribute, add `data-to` attribute on each.


### GSAP SmoothScroller Ready
The ScrollSmoother Plugin from GSAP Club is ready to work with Page Transitions. Put a look on Scroller.jsx component. You'll need a GSAP Premium Licence for use it.