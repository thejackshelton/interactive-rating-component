const ratings = document.querySelectorAll('[role="button"]');
const submitButton = document.querySelector('.submit');
const ratingContainer = document.querySelector('.rating-menu');
const thanksContainer = document.querySelector('.thank-you');
const currentRating = document.getElementById('score');

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

submitButton.addEventListener('click', () => {
    ratingContainer.style.display = "none";
    thanksContainer.style.display = "block";
})

