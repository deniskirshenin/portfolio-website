---
title: "Mishka"
summary: "Gulp of Less HTML! My first responsive website I developed mobile-first. This project was built using Gulp for build. Less CSS preprocessor for styling and BEM notation in HTML structure."
image: /images/mishka.jpeg
imageAlt: "Screenshots of Mishka app"
tech:
  - "Less"
  - "Gulp"
  - "HTML"
  - "JavaScript"
siteUrl: "https://mishka-shop-project.netlify.app/"
repoUrl: "https://github.com/deniskirshenin/mishka"
---

### Problem Solved

This is my first website developed based on Responsive Web Design approach. Goal was to create scalable E-com website with responsive design using media queries, on-the-go image optimization for Retina and non-Retina displays.

### Weapon of choice

I structured HTML using BEM notation. As this project is a E-com website it made sense to make it scalable in case of growth, upgrading to more advanced tech and using CMS. Styling was done using Less preprocessor also in goals of scalability and simplicity of maintaining. For build it was used custom Gulp build with set of npm packages for minifying html, css and js, image optimization, converting images from jpg to webp and create the final build for deployment.

### Problems, process, improvements

Making my own build with Gulp felt challenging. Making components as reusable as possible also was sort of challenge. I structured my workflow by following steps:
- Structuring all components and HTML pages of project mobile-first using BEM notation
- Structuring CSS by dividing into Less blocks
- Configuration of npm and Gulp
- Adding pinch of JS for mobile menu

I plan to add e-com CMS to this website. Also I want to improve Gulp build and use more optimized packages for project needs.

### Lessons Learned

Main discover for me from this project was BEM notation and Gulp. It was a game changer for me, after learning this approach it was much easier to get into Component-Driven development. Using Gulp was fun, I learnt a lot about package management, how to implement them and how build process of website is relying on the build process. 