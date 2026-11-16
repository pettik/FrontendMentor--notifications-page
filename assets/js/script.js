const posts = document.querySelectorAll('#notification-list .post');
const markAllButton = document.querySelector('#mark-all');
const unreadCount = document.querySelector('#unread-count');
const notificationStatus = document.querySelector('#notification-status');

function updateNotificationSummary() {
  const count = Array.from(posts).filter(post => post.classList.contains('is-unread')).length;

  unreadCount.textContent = count;
  markAllButton.textContent = count > 0 ? 'Mark all as read' : 'Mark all as unread';

  return count;
}

markAllButton.addEventListener('click', () => {
  const markAsUnread = !Array.from(posts).some(post => post.classList.contains('is-unread'));

  posts.forEach(post => post.classList.toggle('is-unread', markAsUnread));

  const count = updateNotificationSummary();
  notificationStatus.textContent = markAsUnread
    ? `All notifications marked as unread. ${count} unread notifications.`
    : 'All notifications marked as read. 0 unread notifications.';
});

updateNotificationSummary();
