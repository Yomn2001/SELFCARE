function redirectToPage(category) {
    console.log("Redirecting to category:", category); // Check if this prints in the console
    switch (category) {
        case 'Calories burned':
            window.location.href = 'caloriesburned.html';
            break;
        case 'steps':
            window.location.href = 'steptracker.html';
            break;
        case 'exercise':
            window.location.href = 'Exercisewheel.html';
            break;
        default:
            console.log('Page not found');
    }
}
