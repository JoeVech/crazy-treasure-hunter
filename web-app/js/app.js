// Отправка данных в Telegram при нахождении артефакта
document.querySelector('a-marker').addEventListener('markerFound', (event) => {
    const artifactType = event.target.getAttribute('url').split('/').pop().replace('.patt', '');
    
    // Отправляем данные в бота
    if (window.Telegram && window.Telegram.WebApp) {
        Telegram.WebApp.sendData(JSON.stringify({
            type: artifactType,
            timestamp: new Date().getTime()
        }));
        Telegram.WebApp.close();
    } else {
        alert('Артефакт найден! Золото +100!');
    }
});