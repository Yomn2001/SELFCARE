function redirectToPage(category) {
    switch (category) {
        case 'podcasts':
            window.location.href = 'podcasts.html';
            break;
        case 'quotes':
            window.location.href = 'quotes.html';
            break;
        default:
            console.log('Page not found');
    }
}
