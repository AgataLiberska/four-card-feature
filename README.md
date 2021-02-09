# Frontend Mentor - Four card feature section

![Design preview for the Four card feature section coding challenge](./design/desktop-preview.jpg)

## Goals

The goal is to recreate the above design as closely as possible using any tools.

## Challenges 

As an additional challenge, I wanted to make each card a clickable link while ensuring that they remain fully accessible. 

Placing a `<div>` inside the anchor tag is not a good solution, as it causes accessibility issues for screenreader users. It would also make it impossible to select a portion of text in that `<div>`.

Instead, I solve this issue by adding an event listener on each of `<div class="feature__grid__item>` cards, which if no text is selected, triggers a click event on the link within the respective card.

As there are no other links within the cards in this design, propagation would not a problem. However, to ensure that the project is scalable, I prevent event bubbling with `.stopPropagation()` method on all elements with `class="clickable"`.



