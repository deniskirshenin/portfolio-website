---
title: "Sedona"
summary: "Sedona! Never stop refactoring! I developed this landing page as my first website with plain HTML & CSS. Then pimped it using NUNJUCKS and 11ty for structure, SASS for styling and pinch of JS to bring it to life."
image: /images/sedona.jpeg
imageAlt: "Screenshots of sedona website"
tech:
  - "NUNJUCKS"
  - "SASS"
  - "11ty"
  - "JavScript"
siteUrl: "https://sedona-project.netlify.app/"
repoUrl: "https://github.com/deniskirshenin/sedona"
---

### Project idea

It is my first static website I built from scratch using Figma design. This is landing website about travelling in Sedona. Initially it was built with just HTML and CSS. With developing my skills and learning about component-driven development approach while learning React and Next.js I learnt about static-site generators. I decided to use this website as template to learn about SSG and added 11ty to this project.

### Weapon of choice

As I mentioned this project was built with just HTML and CSS. As for styling I moved from CSS to SASS as it is one of the most popular CSS preprocessor which I tried for first time. While choosing SSG for it I was looking througn Next.js and Gatsby which are React-based, but they appeared as overkill for it - Next.js is more suitable for dynamic apps and Gatsby seemed like too complex for this case. Discovering documentation of Next.js and Gatsby put me on the path of JAM concept. Surfing JAMstack website I learnt about big amount available SSG. I was choosing between Jekyll and 11ty. I chose 11ty because of its simplicity and because it was easier for me to understand main concepts as it was based on Node.js. And I totally loved the community-based documentation and tutorials.

### Problems, process, improvements

Like every time you start learning something new on your own you have lots of questions and sometimes fell lost. I decided to go step by step:
- Research about SSG and finding the most suitable for my case
- Configuration of 11ty and npm
- Structuring project with template files and then divide my big HTML files into Nunjucks template blocks
- Structuring CSS by dividing big CSS file into SASS blocks
- Adding pinch of JS for interactivity

I'm still working on optimizing images, I got stucked with using 11ty plugin for image optimization in `for` loops.
Also I want to improve navigation and pagination components.

### Lessons Learned

I wanted just to refactor my old code 😅. But this took me on a very cool journey. I learnt a lot about SSG and how to build static websites quicker that just write HTML. Learnt that I love to learn. I spent hours looking throung new technologies, trying out tutorials and deciding which is right for this case. I'm stille positive that my code isn't perfect. And that sooner or later it will be changed again as I learn more. Never stop refactoring!