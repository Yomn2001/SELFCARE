function navigateTo(category) {
    switch (category) {
        case 'Nutrition':
            window.location.href = 'nutrition.html'; // Redirect to Nutrition page
            break;
        case 'Physical':
            window.location.href = 'physicalcategories.html'; // Redirect to Physical Health page
            break;
        case 'Mental':
            window.location.href = 'mentalcategories.html'; // Redirect to Mental Health page
            break;
        case 'DailyCare':
            window.location.href = 'dailycare.html'; // Redirect to Daily Care page
            break;
        case 'DailyQuest':
            window.location.href = 'dailyquest.html'; // Redirect to Daily Quest page
            break;
        case 'Wellness':
            window.location.href = 'pandq.html'; // Redirect to Podcasts and Quotes page
            break;
        case 'DailyQuotePodcast':
            window.location.href = 'daily_quote_podcast.html'; // Redirect to Daily Quote Podcast page
            break;
        default:
            console.log('Page not found'); // Log error if the category does not match
    }
}
