//document.addEventListener('DOMContentLoaded', function() {
    /* Upcoming Schedule
    const upcomingSchedule = [
        { date: '2023-05-15', time: '14:00', type: 'Tarot Reading' },
        { date: '2023-05-16', time: '10:30', type: 'Astrology Consultation' },
        { date: '2023-05-17', time: '16:00', type: 'Numerology Session' }
    ];

    const scheduleList = document.getElementById('upcoming-schedule');
    upcomingSchedule.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.date} ${item.time} - ${item.type}`;
        scheduleList.appendChild(li);
    });

    // Follow Button
    const followBtn = document.getElementById('follow-btn');
    let isFollowing = false;
    followBtn.addEventListener('click', function() {
        isFollowing = !isFollowing;
        followBtn.textContent = isFollowing ? 'Unfollow' : 'Follow';
        const followerCount = document.getElementById('follower-count');
        followerCount.textContent = isFollowing ? '5,235' : '5,234';
    });

    // Earnings Chart (using Chart.js - you'll need to include the library)
    // This is a placeholder, you'll need to implement the actual chart
    const ctx = document.getElementById('earnings-chart').getContext('2d');
    // new Chart(ctx, { ... }); // Implement your chart here

    // Testimonials
    const testimonials = [
        { name: 'John D.', text: 'Incredible insights! Highly recommended.' },
        { name: 'Sarah M.', text: 'Very accurate readings. Thank you!' }
    ];

    const testimonialsContainer = document.getElementById('testimonials');
    testimonials.forEach(testimonial => {
        const div = document.createElement('div');
        div.innerHTML = `<p>"${testimonial.text}"</p><p>- ${testimonial.name}</p>`;
        testimonialsContainer.appendChild(div);
    });

    // Latest Articles
    const articles = [
        { title: 'Understanding Your Moon Sign', link: '#' },
        { title: 'The Power of Planetary Transits', link: '#' },
        { title: 'Numerology in Daily Life', link: '#' }
    ];

    const articleList = document.getElementById('article-list');
    articles.forEach(article => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="${article.link}">${article.title}</a>`;
        articleList.appendChild(li);
    });

     Notifications
    const notifications = [
        'New message from client',
        'Upcoming appointment in 1 hour',
        'You have a new follower'
    ];

    const notificationList = document.getElementById('notification-list');
    notifications.forEach(notification => {
        const li = document.createElement('li');
        li.textContent = notification;
        notificationList.appendChild(li);
    });
});
*/


// script.js

document.getElementById("kundali-btn").addEventListener("click", () => {
    alert("Kundali Generator Tool is not yet implemented!");
  });
  
  document.getElementById("numeric-btn").addEventListener("click", () => {
    alert("Numeric Calculator Tool is not yet implemented!");
  });
  

  const carousel = document.querySelector('.services-carousel');
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');

let scrollAmount = 0;

leftBtn.addEventListener('click', () => {
  scrollAmount -= 300; // Adjust scroll amount as per card width
  if (scrollAmount < 0) {
    scrollAmount = 0;
  }
  carousel.style.transform = `translateX(-${scrollAmount}px)`;
});

rightBtn.addEventListener('click', () => {
  const maxScroll = carousel.scrollWidth - carousel.offsetWidth;
  scrollAmount += 300; // Adjust scroll amount as per card width
  if (scrollAmount > maxScroll) {
    scrollAmount = maxScroll;
  }
  carousel.style.transform = `translateX(-${scrollAmount}px)`;
});
