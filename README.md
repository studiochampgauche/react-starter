# React Starter
> [!IMPORTANT]  
> This repo is based on `npx create-react-app` with minimal edits for respond quickly to our clients.

> [!CAUTION]  
> Metas component is new and not completed. You can remove it from the index.jsx file.


## Guide
1. Clone this repo
1. Install your node modules `npm i`
2. Run your project locally `npm run start`




## Features

### Single Page App
Import `{ Link }` or `{ useNavigate }` from `react-router-dom` and use them for get your pages without reloading. For examples, we use useNavigate() in Transitor.jsx for get a page loaded in a specific moment and `<Link>` in Nav.jsx.

### Smooth Transitions between Pages
Manage animations between your pages in the Transitor.jsx component file. Fluid fadeOut/fadeIn based on GSAP is set by default on `<main>` HTML Element.

Call transition by adding `data-transition="true"` to your elements. If elements don't have `href` attribute, add `data-to` attribute on each.


### GSAP SmoothScroller Ready
The ScrollSmoother Plugin from GSAP Club is ready to work with Page Transitions. Put a look on Scroller.jsx component. You'll need a GSAP Premium Licence for use it.