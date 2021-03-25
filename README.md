# Personal Day Scheduler - Bootcamp Spot Homework #5

## Overview

This document describes the components of a password generator powered by Javascript, HTML, and CSS. It also uses elements of JQuery.

This website is meant to demonstrate knowledge and competency in the following:

- JQuery,
- DOM elements,
- Data attributes,
- forEach loops,
- Moment and time-based CSS formatting,
- LocalStorage; setting and getting.

# Features
The following are the specific components and changes made to the original files

## HTML

- Added instructions to the top of the page.
- Created separate divs for each time-block/hour of the day, using the following attributes:
-- ID:
-- Class:
-- Data-attribute:
- Added an emoji of an unlocked padlock. It will be replaced with a locked padlock after being clicked.

## Javascript

- Gathered the current date using Moment (`moment()`) and displays it at the top of the page.
- Gathered the current time using Moment (`moment().hour()`)
- Collected the time-value associated to each time-block. This is done by through querying the div's ID with a forEach loop and parseInt function.
- Compared the current time/hour to each div's hour. With an if/else statement, each div is assigned either the `present` class (if the two match), the `past` class (if current time is ahead of div time), or the `future` class (if div time is ahead of current time)
- Save feature: with an event listener, clicking a blue block on the right side of each time-block div commits its respective `<textarea>` content to localStorage. It uses the div's ID to populate its key. Ex: {"11AM", "Go to gym"}. 
- Save feature: Upon clicking, the div's emoji changes to a locked padlock. It does not toggle between locked or unlocked upon clicking; you must apply a "keyup" in the textarea's content to "unlock" the padlock once more.
- On page load: Loading the page runs the code to access every localStorage item, ensuring that saved content is maintained.
- Clear calendar button: Clicking the button at the bottom of the page will pull up a `confirm` prompt, verifying that you wish to clear your calendar. By confirming the prompt, the JS clears the localStorage and reloads the page.

## Challenges

- Given some major difficulties in successfully coding certain JQuery functions, there is some interspersed JQuery and Javascript elements.
- There was some possibility to separate functions from event listeners to make the code more concise. For reasons of time, I elected to not refactor the code accordingly.

# File Architecture

File name | Function
------------ | -------------
index.html | HTML
style.css | CSS stylesheet
script.js| Javascript


# Website Appearance 
Once loaded, the website should look like this:  
![Appearance Upon Deployment](Screenshot.jpg)

This website is available at the following URL:   
https://f34rth3r34p3r.github.io/Personal-Scheduler-JS/

You can access the `.git` files at:
https://github.com/F34rTh3R34p3r/Personal-Scheduler-JS.git


# Contributor(s)
Daniel Pisani (F34rTh3R34p3r)

# MIT License

Copyright (c) 2021 Daniel Pisani (F34rTh3R34p3r) 

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.