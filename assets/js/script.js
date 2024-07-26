document.addEventListener("DOMContentLoaded", function() {
    // Inicializace
    updateNotificationCount();

    // Přidání klikacího události na "Mark all as read/unread"
    const markAllButton = document.querySelector('.header p:last-child');
    markAllButton.addEventListener('click', function() {
        if (markAllButton.textContent === 'Mark all as read') {
            markAllAsRead();
        } else {
            markAllAsUnread();
        }
    });
});

function updateNotificationCount() {
    const notificationCount = document.querySelectorAll('.post.news').length;
    document.querySelector('.notifications span').textContent = notificationCount;
}

function markAllAsRead() {
    document.querySelectorAll('.post.news').forEach(post => {
        post.classList.remove('news');
        const dot = post.querySelector('.dot');
        if (dot) {
            dot.classList.add('hidden');
        }
    });
    updateNotificationCount();
    const markAllButton = document.querySelector('.header p:last-child');
    markAllButton.textContent = 'Mark all as unread';
}

function markAllAsUnread() {
    document.querySelectorAll('.post').forEach(post => {
        post.classList.add('news');
        const dot = post.querySelector('.dot');
        if (dot) {
            dot.classList.remove('hidden');
        }
    });
    updateNotificationCount();
    const markAllButton = document.querySelector('.header p:last-child');
    markAllButton.textContent = 'Mark all as read';
}
