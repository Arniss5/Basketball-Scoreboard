# Basketball Scoreboard

This app helps keeping track of scores in basketball match.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Add 1, 2 or free points to respecive scores
- See the highligt on the leading score
- Reset the scores and start a new game
- See the timer for the current game
- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page


### Screenshot

![](./styles/preview.JPG)


### Links

- Code: [Github](https://github.com/Arniss5/Basketball-Scoreboard)
- Live Site URL: [Github Pages](https://arniss5.github.io/Basketball-Scoreboard/)

## My process

### Built with

- Semantic HTML5 markup
- Custom font file
- Flexbox
- JavaScript
- Based on [Figma design](https://www.figma.com/file/YC48MCx4frBFtYoz6rNJE6/Basketball-Scoreboard?node-id=107%3A195)


### What I learned

With this project I practiced creating JS functions with conditionals.
I explored new event listeners. I learned how to get an ID of clicked element. I created an interval.

```html
<button class="score-btn" id="home1" onclick="addScore(event)">
```
```css
@font-face {
    font-family: 'CursedTimerUlil-Aznm';
    src: url('./Styles/CursedTimerUlil-Aznm.ttf');
}
}
```
```js
function startTimer() {
    setInterval(function () {
        timerCount += 1
        timer.textContent = timerCount
    }, 60000);
}
```

```js
window.addEventListener('load', startTimer())
}
```
```js
function addScore(event) {
    //check id of the clicked button and add respective points
    if(event.target.id === "home1") {
        homecount += 1
    } else if(event.target.id === "home2")  {
        homecount += 2
    }
//etc
}
```


### Continued development

I will practice manipulating the DOM and creating more complex JS functions.


## Author

- Website - [Arniss5](https://github.com/Arniss5)


## Acknowledgments

Heaven Castro for the [Cursed Timer ULiL Font.](https://www.fontspace.com/cursed-timer-ulil-font-f29411)
