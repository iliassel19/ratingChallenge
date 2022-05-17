# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

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

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
