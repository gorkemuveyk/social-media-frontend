const friendsBtn = document.getElementById('friends-button');
const friendsArea = document.querySelector('.friends-area');
const notificationsBtn = document.getElementById('notifications-button');
const notificationsArea = document.querySelector('.notifications-area');
const messageBtn = document.getElementById('message-button');
const messageArea = document.querySelector('.message-area');

let areaIsOpen = false;
let notificationsAreaisOpen = false;
let messageAreaisOpen = false;

friendsBtn.addEventListener(('click'), () => {
    openPanel(friendsArea);
});

notificationsBtn.addEventListener('click', () => {
    openPanel(notificationsArea);
});

messageBtn.addEventListener('click', () => {
    openPanel(messageArea);
});

function openPanel(area) {
    friendsArea.style.display = 'none';
    messageArea.style.display = 'none';
    notificationsArea.style.display = 'none';

    if (areaIsOpen) {
        area.style.display = 'none';
        areaIsOpen = false;
    } else {
        area.style.display = 'flex';
        areaIsOpen = true;
    }
}