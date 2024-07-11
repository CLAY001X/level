document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.increment-btn');
    const goalButtons = document.querySelectorAll('.goal-btn');
    const resetButton = document.getElementById('resetButton');

    // Load saved counts and goals from localStorage
    const savedRunCount = localStorage.getItem('runCount');
    const savedPushupCount = localStorage.getItem('pushupCount');
    const savedSitupCount = localStorage.getItem('situpCount');
    const savedSquatCount = localStorage.getItem('squatCount');
    const savedRunGoal = localStorage.getItem('runGoal');
    const savedPushupGoal = localStorage.getItem('pushupGoal');
    const savedSitupGoal = localStorage.getItem('situpGoal');
    const savedSquatGoal = localStorage.getItem('squatGoal');

    if (savedRunCount !== null) document.getElementById('runCount').textContent = savedRunCount;
    if (savedPushupCount !== null) document.getElementById('pushupCount').textContent = savedPushupCount;
    if (savedSitupCount !== null) document.getElementById('situpCount').textContent = savedSitupCount;
    if (savedSquatCount !== null) document.getElementById('squatCount').textContent = savedSquatCount;
    if (savedRunGoal !== null) document.getElementById('runGoal').textContent = savedRunGoal;
    if (savedPushupGoal !== null) document.getElementById('pushupGoal').textContent = savedPushupGoal;
    if (savedSitupGoal !== null) document.getElementById('situpGoal').textContent = savedSitupGoal;
    if (savedSquatGoal !== null) document.getElementById('squatGoal').textContent = savedSquatGoal;

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const target = document.getElementById(button.dataset.target);
            const action = button.dataset.action;
            let count = parseInt(target.textContent);

            if (action === 'increment') {
                count++;
            } else if (action === 'decrement' && count > 0) {
                count--;
            }

            target.textContent = count;
            localStorage.setItem(button.dataset.target, count); // Save count to localStorage
        });
    });

    goalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const target = document.getElementById(button.dataset.target);
            const newGoal = prompt('Введите новую цель:', target.textContent);

            if (newGoal !== null) {
                target.textContent = newGoal;
                localStorage.setItem(button.dataset.target, newGoal); // Save goal to localStorage
            }
        });
    });

    resetButton.addEventListener('click', () => {
        document.getElementById('runCount').textContent = 0;
        document.getElementById('pushupCount').textContent = 0;
        document.getElementById('situpCount').textContent = 0;
        document.getElementById('squatCount').textContent = 0;
        document.getElementById('runGoal').textContent = 10;
        document.getElementById('pushupGoal').textContent = 100;
        document.getElementById('situpGoal').textContent = 100;
        document.getElementById('squatGoal').textContent = 100;

        localStorage.setItem('runCount', 0);
        localStorage.setItem('pushupCount', 0);
        localStorage.setItem('situpCount', 0);
        localStorage.setItem('squatCount', 0);
        localStorage.setItem('runGoal', 10);
        localStorage.setItem('pushupGoal', 100);
        localStorage.setItem('situpGoal', 100);
        localStorage.setItem('squatGoal', 100);
    });
});

