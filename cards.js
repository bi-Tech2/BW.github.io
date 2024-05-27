    document.querySelectorAll('.toggle-overlay').forEach(item => {
        item.addEventListener('click', event => {
            const card = event.target.closest('.card');
            card.classList.toggle('active');
        });
    });

    document.querySelectorAll('.close-overlay').forEach(item => {
        item.addEventListener('click', event => {
            const card = event.target.closest('.card');
            card.classList.remove('active');
        });
    });

    document.querySelectorAll('.play-btn').forEach(item => {
        item.addEventListener('click', event => {
            const audio = event.target.closest('.card').querySelector('audio');
            if (audio.paused) {
                audio.play();
                event.target.classList.remove('bx-play');
                event.target.classList.add('bx-pause');
            } else {
                audio.pause();
                event.target.classList.remove('bx-pause');
                event.target.classList.add('bx-play');
            }
        });
    });

    document.querySelectorAll('.download-btn').forEach(item => {
        item.addEventListener('click', event => {
            const audioSrc = event.target.dataset.src;
            const link = document.createElement('a');
            link.setAttribute('href', audioSrc);
            link.setAttribute('download', '');
            link.style.display = 'none';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    });





    document.addEventListener('DOMContentLoaded', function () {
        const searchInput = document.querySelector('.l input[type="text"]');
        const delElements = document.querySelectorAll('.del');

        searchInput.addEventListener('focus', hideDelElements);
        searchInput.addEventListener('click', hideDelElements);
        searchInput.addEventListener('blur', showDelElements);

        function hideDelElements() {
            delElements.forEach(del => {
                del.style.display = 'none';
            });
        }

        function showDelElements() {
            delElements.forEach(del => {
                del.style.display = 'block';
            });
        }
    });
