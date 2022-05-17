# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

### Links

[Solution URL](https://github.com/iliassel19/ratingChallenge.git)
[Live Site URL](https://628402c214761e0833fe2de8--magnificent-stroopwafel-6673d1.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JavaScript

### What I learned

This challenge was much of training on my JavaScript skills. I think the use of Event Delegation is the primary thing that I improved in my skills. This challenge was a great practice of that methode of handling events and optimizing the experience.

<script>
cardRatings.addEventListener("click", function (e) {
  if (!e.target.classList.contains("card\_\_btn")) return;
  cardBtn.forEach((btn) => btn.classList.remove("checked"));
  e.target.classList.add("checked");
});
</script>

### Continued development

I think overall, I need to improve my skills on event handling, and how to work it out with solutions that I fully Understand.

## Author

- Frontend Mentor - [@iliassel19](https://www.frontendmentor.io/profile/iliassel19)
