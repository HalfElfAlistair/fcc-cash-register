# FCC Project: Cash Register

A JavaScript function that takes inputs for 'purchase price', 'cash paid' and 'stored register cash', calculates values (such as required change) and returns a message with two keys 'status' and 'change'.

## Contents

- [Introduction](#Introduction)

- [Technologies](#Technologies)

- [Launch](#Launch)

- [Built With](#Built-With)

- [Author](#Author)

- [Acknowledgments](#Acknowledgments)

- [Author Notes](#Author-Notes)


## Introduction

Made as part of the JavaScript Algorithms and Data Structures course on FreeCodeCamp.

### Course Aim

Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument. cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.


### Personal Aims

Succesfully solve the JavaScript challenge.

Convert the code from my completed challenge so that it works with a HTML page.

Improve my knowledge and understanding of JavaScript.

Have a project I can go back and refactor as I progress, for shorter code that's easier to understand.


## Technologies

- HTML5
- JavaScript
- CSS3

## Launch

Running this project locally should be nice and easy! Either download the repository from Github or use the viewer on Codepen.

### Prerequisites

None

### Running

Once you've downloaded and unzipped the repo file, simply open up the index.html in your browser.


## Built With

- Visual Studio Code

- Node.js

- Chrome Devtools

- FCC Console

I developed the JS code in on FCC for the challenge, then used VSC to amend it and add it to HTML.

## Author

Alistair Sinclair-Smith

Email: [alistairjss90@gmail.com](alistairjss90@gmail.com)

Github: [HalfElfAlistair](https://github.com/HalfElfAlistair)


## Acknowledgments

### [FreeCodeCamp](https://www.freecodecamp.org/)
The educational and practical opportunity to develop my coding skills.

### [The Modern JavaScript Tutorial](https://javascript.info/)
I've found myself using multiple learning resources for JavaScript and this has been a very useful one.

### [w3schools](https://www.w3schools.com/)
A really useful source for learning JavaScript.

### [Useful Programmer](https://www.youtube.com/channel/UCAocVBB14ixYUfdhKaSrvNQ)
A brilliant resource to assist with learning to code.

### [Python Tutor](http://pythontutor.com/)
Though I did a lot of debugging with Chrome DevTools, this similar tool was also great for testing snippets of code and getting an idea of the processes involved so it's easier to know what I have to change.

### FCC user ebruphs
I struggled for a while to solve an issue with parts of my code incrementing slightly over what it should by a lot of decimal places. After a friend suggested looking at this task in the forums I quickly found ebruphs' post here: https://forum.freecodecamp.org/t/cash-register-someone-should-help-me-on-this-i-cannot-figure-out-why-it-wont-pass/300320. It looked like they'd encountered the same problem as I had and had solved it by breaking their calculations down further and adding variable resets to two decimal places with .toFixed(2). I then worked on a similar approach to get past this issue and progress with the challenge. Thanks ebruphs!

### [Matt Thomas](https://insidae.com/)
Matt helped me when intitially trying to debug the issue mentioned above. As well as being incredibly supportive and encouraging too!

### [WebAIM.org](https://webaim.org/)
Their colour contrast checker is a go to for me every time so I can ensure my work is readable.

### [Coolors.co](https://coolors.co/)
I use their 'create a palette' tool to help me select a colour scheme.


## Author Notes

This was definitely the toughest of the five challenges to complete this course, or I found it was anyway. But by the end of it I felt I'd learned a lot more and this has only improved further since working on this repo.

As with the other projects my code is still pretty long and basic, I make a hell of a lot of declarations and suspect this can be reduced as my skills and knowledge progress. I've actually added some things since making it work as a HTML page too, like a RegExp checker to ensure manually entered values fit their respective currency (this was a great way to get better at RegExp).

I've found displaying the resulting change arrays isn't as easy as I'd expected. I'm going to have to read more about DOM and events because there's probably a better way than using innerHTML. At present it's more of an aesthetic issue though, you can still see the values just it looks messy imo.
