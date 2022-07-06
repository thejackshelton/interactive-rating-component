const buttonRating = document.querySelectorAll('.ratings');
let ratings = [];
let lastRating = 0;

//Selects each button
buttonRating.forEach((button) => {
    button.addEventListener('click', () => {
        let index = parseInt(button.getAttribute("data-rate"));
        button.classList.toggle('selected');
        console.log(index);


        ratings.push(index);
        for (let i = 0; i < ratings.length; i++) {
            lastRating = ratings.at(-1);
            // button.classList.remove('selected')
        }
    })
})