# Frontend Mentor - Four card feature section

![Design preview for the Four card feature section coding challenge](./design/desktop-preview.jpg)

## Goals

The goal is to recreate the above design as closely as possible using any tools.

## Challenges 

As an additional challenge, I wanted to make each card a clickable link while ensuring that they remain fully accessible. 

Placing a `<div>` inside the anchor tag is not a good solution, as it causes accessibility issues for screenreader users. It would also make it impossible to select a portion of text in that `<div>`.

To avoid such issues, I added an event listener to each of the `<div class="feature__grid__item>` cards. If no text is selected, the code looks for the element with the class of `main-link` and triggers a click on that element. I provided a valid url in the first card (Supervisor) to present this behaviour.

As there are no other links within the cards in this design, propagation would not a problem. However, to ensure that the project is scalable, I prevent event bubbling for all elements with `class="clickable"`.



