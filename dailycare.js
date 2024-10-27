function redirectToPage(category) {
    switch (category) {
        case 'medication':
            window.location.href = 'medication.html';
            break;
        case 'prayer':
            window.location.href = 'prayer.html';
            break;
        case 'hygiene':
            window.location.href = 'hygienen.html';
            break;
        default:
            console.log('Page not found');
    }
}
