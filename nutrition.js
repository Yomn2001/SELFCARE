function redirectToPage(category) {
    switch (category) {
        case 'bmi':
            window.location.href = 'bmicalculater.html';
            break;
        case 'diet':
            window.location.href = 'dietplan.html';
            break;
        case 'calorie':
            window.location.href = 'calorietracker.html';
            break;
        case 'water':
            window.location.href = 'waterintake.html';
            break;
        default:
            console.log('Page not found');
    }
}
