document.addEventListener('DOMContentLoaded', () => {
    const books = document.querySelectorAll('.book');
    books.forEach(book => {
        const descriptionText = book.getAttribute('data-description');
        const descriptionDiv = document.createElement('div');
        descriptionDiv.classList.add('description');
        descriptionDiv.innerText = descriptionText;
        book.appendChild(descriptionDiv);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('#header a');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.6
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const navLink = document.querySelector(`#header a[href="#${entry.target.id}"]`);
            if (entry.isIntersecting) {
                navLinks.forEach(link => link.classList.remove('active'));
                navLink.classList.add('active');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const playButtons = document.getElementsByClassName('playButton');
    const stopButtons = document.getElementsByClassName('stopButton');
    const playText= document.getElementsByClassName('playText');
    const audios = document.getElementsByClassName('audio');

    Array.from(audios).forEach(audio => audio.volume = 0.15);


    Array.from(playButtons).forEach((playButton, index) => {
        playButton.addEventListener('click', function() {
            if (audios[index].paused) {
                // Pause all audios
                Array.from(audios).forEach(audio => audio.pause());
                // Hide all stop buttons and show play buttons
                Array.from(stopButtons).forEach(button => button.style.display = 'none');
                Array.from(playText).forEach(div => div.style.display = 'none');
                Array.from(playButtons).forEach(button => button.style.display = 'inline-block');


                audios[index].play();
                playButtons[index].style.display = 'none';
                playText[index].style.display='inline-block';
                stopButtons[index].style.display = 'inline-block';
            } else {
                audios[index].pause();
                playButtons[index].style.display = 'inline-block';
                playText[index].style.display='none';
                stopButtons[index].style.display = 'none';
            }
        });
    });

    Array.from(stopButtons).forEach((stopButton, index) => {
        stopButton.addEventListener('click', function() {
            audios[index].pause();
            playButtons[index].style.display = 'inline-block';
            playText[index].style.display='none';
            stopButtons[index].style.display = 'none';
        });
    });
});
