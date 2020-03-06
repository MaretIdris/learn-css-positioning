// Cover 50% of viewport width with the foreground cover.
const coverButton = document.querySelector('#cover-50w');
coverButton.addEventListener('click', () => {
    const foregroundCover = document.querySelector('.foreground-cover');
    // half-vw has to be a class and then it can be toggled.
    foregroundCover.classList.toggle('half-vw');

    // Change the button text
    if (foregroundCover.classList.contains("half-vw")) {
        document.querySelector('#cover-50w').innerHTML = "Cover full width";
    } else {
        document.querySelector('#cover-50w').innerHTML = "Cover 50% width";
    }
});

// Change the viewport height 50%.
const coverHeightButton = document.querySelector('#cover-50h');
coverHeightButton.addEventListener('click', () => {
    const foregroundCover = document.querySelector('.foreground-cover');
    foregroundCover.classList.toggle('half-vh');

    // Change the button text
    if (foregroundCover.classList.contains("half-vh")) {
        document.querySelector('#cover-50h').innerHTML = "Cover full height";
    } else {
        document.querySelector('#cover-50h').innerHTML = "Cover 50% height";
    }
});

// Change the cover opacity to 20%.
const coverOpacityButton = document.querySelector('#cover-opacity-20');
coverOpacityButton.addEventListener('click', () => {
    const foregroundCover = document.querySelector('.foreground-cover');
    foregroundCover.classList.toggle('opacity');

    // Change the button text
    if (foregroundCover.classList.contains('opacity')) {
        document.querySelector('#cover-opacity-20').innerHTML = "Cover opacity 70%";
    } else {
        document.querySelector('#cover-opacity-20').innerHTML = "Cover opacity 20%";
    }
});

