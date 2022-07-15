# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![Screenshot](https://imgur.com/lg3Y76K")

### Links

- Solution URL: [Front End Mentor](https://your-solution-url.com)
- Live Site URL: [Live Site](https://thejackshelton.github.io/interactive-rating-component/)

## My process

I wasn't able to add the SVG's, as it was not showing on my screen for some reason. It ended up working once I used an image tag.

My process was to separate the two pieces of content into containers. The rating menu, and the thank you container. 

Once I did that, I used flexbox to position the elements like intended. Then I styled it using CSS.

To make the individual rating highlighted after someone clicked it. I used the focus keyword to make the button appear as if it was selected.

Then I started JS. I labeled each button with an ID and used a forEach and an event listener to change the text content in the span with whatever the user chose.

I then added another event listener that would hide the display of the rating container, and showed the thank you container.

Side note: I know that I could've used class toggles, but this seemed like a more simple approach to me.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- JS

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

I think I kept my media queries pretty small. So I felt proud of that.
```css
@media only screen and (min-width: 1440px) {
    .container {
        width: 23rem;
        height: 22rem;
        padding: 2rem;
        background: var(--darkBlueOpacity);
        border-radius: 1rem;
    }

    h1 {
        font-size: 1.7rem;
    }

    p {
        font-size: 15px;
    }
}

```
```js
ratings.forEach((rating) => {
    rating.addEventListener('click', function (e) {
        let selectedBtn = e.currentTarget;
        for (let i = 0; i < ratings.length; i++) {
            if (ratings[i].getAttribute('aria-selected') == 'true') {

                ratings[i].setAttribute('aria-selected', false);
                selectedBtn.setAttribute('aria-selected', true);
                currentRating.textContent = selectedBtn.id;

            } else {
                selectedBtn.setAttribute('aria-selected', true);
                currentRating.textContent = selectedBtn.id;
            }
        }

    })
})
```

### Continued development

I want to be more comfortable with mapping out the logic of a problem. I'd also just like to continue developing with JavaScript and getting a good handle before starting React. 

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [MDN](https://developer.mozilla.org/en-US/) - This helped me when looking to understand the focus keyword.

## Author

- Frontend Mentor - [@thejackshelton](https://www.frontendmentor.io/profile/thejackshelton)
- Twitter - [@thejackshelton](https://www.twitter.com/thejackshelton)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

I'd like to thank Chris and Alex Marshall for giving advice on the logic for this one. It was a pleasure.
