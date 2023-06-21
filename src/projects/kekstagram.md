---
title: "Kekstagram"
summary: "When you get tired from Instagram. This my first complex JavaScript project. I used API fetching, ES-modules and learnt basic concepts of building JS apps."
image: /images/kekstagram.jpeg
imageAlt: "Screenshots of kekstagram app"
tech:
  - "JavaScript"
  - "HTML"
  - "CSS"
siteUrl: "https://kekstagram-app.netlify.app/"
repoUrl: "https://github.com/deniskirshenin/kekstagram"
---

### Problem Solved

This is my first JavaScript project. Kekstagram is an image viewing service. Users are given the opportunity to upload their own photos or view photos previously uploaded by other users.

Users should be able to:

- Upload a new image to the site and filling in information about it, change size of an image, apply filter on image, change filter intensity with slider
- Submit data to server using POST method, when data is submitted succesfully image upload form resets to default, if unsuccesful
- Receive an error message when the contact form is submitted if:
- The Hashtag is more than 5 hashtags, if hashtag is more than 20 symbols including "#"
- The Comment is more than 140 symbols
- Images are loaded from server. On click on thumbnail big picture is opened. At one time only 5 comments are shown. Click on "Load more" show 5 more comments
- Filter shown thumbnails on main page by click on "Default", "Random", "Discussed"

### Weapon of choice

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Vanilla JS
- Fetch API
- NoUiSlider - lightweight JavaScript range slider with full touch support
- PristineJs - Vanilla javascript form validation micro-library

### Problems, process, improvements

- I started with organasing my code using modules. Main.js is my entry point, utils.js is used for utility functions, api.js to proceed data, and the rest is each module for each feature.
- Then I connected data with thumbnail module to create list of thumbnail pics.
- After this I built function that render full post with big picture, comments and likes on click thumbnail.
- Then I moved to upload image preview function. I added function to preview uploaded image. After I added NoUiSlider to change intensity of applied filter.
- After uploading we need to submit our image to server. To validate submit form I used PristineJs. On successful submit form is reseted and on unsuccessful it remains in last state. I used FormData to collect data from form and send it to server.
- Finally I added function to filter images when "Default", "Random" and "Discussed" are clicked. And optimized loading of images with debounce and throttling functions when changing filter.


### Lessons Learned

I learned how to organise code with ES-modules, closures, event listeners and DOM, how to fetch API. As well I got strong fundamental knowledge of JS concepts used in web development.