---
title: Animations
description: A brief resume of animations on CSS
---

CSS animations are a bliss, no one can deny it!
With some CSS rules you can make your site look more professional, let's talk about some of them, specially **transition**, **transform**, **animation** and **@keyframes**

### Transitions

So, transitions in CSS are like the magic touch for your web elements. Imagine you have a button, and instead of it instantly changing when you hover over it, you want it to smoothly morph into a new color or size. That's where transitions come into play!

Here's the lowdown:
1. ##### The All-in-One Trick:

If you want everything to transition smoothly – be it color, size, or position – you can use the **transition: all 0.3s ease-in-out;** style. It's like telling your element, "Hey, change, but do it gracefully in 0.3 seconds, okay?"

2. ##### Specific Changes:

Or you can spread the properties. For instance:

```css
.transition-element-specific {
  transition-property: opacity, transform;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
}
```

3. ##### The Delay Effect:

If you don't want the animation to start immediately, you can add a delay too!

```css

.delayed-transition {
  transition: opacity 0.3s ease-in-out 0.5s;
}
```

### Transform

Transform rules let you morph, twist, and spin elements without breaking a sweat. You can scale things up, shrink them down, move them or even rotate them. Let's see some examples.


```css
.element {
  /* grow an element 1.5 times it size, you cans shrink it using numbers less than 1 */
  transform: scale(1.5);
}

.element2 {
  transform: rotate(45deg);
}

.element3 {
  /* move the element 50px to the right and 20px up */
  transform: translate(50px, -20px);
}
```

### Animation and Keyframes

`animation` and `@keyframes` rules gives you a granular control over the steps of your animation
Consider the following example:

```css
/* Application of animation to a designated element */
.myElement {
  animation: shake 1s ease-in-out;
}

/* Definition of animation specifics through keyframes */
@keyframes shake {
  0% {
    transform: translateX(-100%);
  }
  50% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}
```
We have defined a shake animation that displaces an element to the left, then to the right, and ultimately returns it to the center. It is noteworthy that, through the utilization of keyframes, we have the capability to specify an intermediate point within the animation and define more than one effect.