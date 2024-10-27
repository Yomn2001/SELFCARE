// Function to handle redirection based on the category
function redirectToPage(category) {
    switch (category) {

        case 'breathing':
            window.location.href = 'breathingexercises.html';
            break;
        case 'stress':
            window.location.href = 'Stressleveltest.html';
            break;
        case 'yoga':
            window.location.href = 'yoga.html';
            break;
        case 'journaling':
            window.location.href = 'journaling.html';
            break;
        default:
            console.log('Page not found');
    }
}
