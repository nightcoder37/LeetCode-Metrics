document.addEventListener('DOMContentLoaded', function () {
    const searchButton = document.getElementById('search-btn');
    const usernameInput = document.getElementById('user-input');
    const statsContainer = document.querySelector('.stats-container');
    const easyProgressCircle = document.querySelector('.easy-progress');
    const mediumProgressCircle = document.querySelector('.medium-progress');
    const hardProgressCircle = document.querySelector('.hard-progress');
    const easyLable = document.getElementById('easy-lable');
    const mediumLable = document.getElementById('medium-lable');
    const hardLable = document.getElementById('hard-lable');
    const cardStatsContainer = document.querySelector('.stats-cards');

    // return true or false based on whether
    function validateUsername(username) {
        if (username.trim() === '') {
            alert('Please enter a username');
            return false;
        }
        const regex = /^[a-zA-Z0-9_-]{1,16}$/;

        const isMatching = regex.test(username);
        if (!isMatching) {
            alert('Invalid username');
        }
        return isMatching;
    }

    searchButton.addEventListener('click', function () {
        const username = usernameInput.value;
        console.log('logging username:', username);
        if (validateUsername(username)) {
            fetch();
        }
    });
});
