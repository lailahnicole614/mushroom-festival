// import functions and grab DOM elements
import { renderMushroom, renderFriend } from './render-utils.js';
const addfriendEl = document.getElementById('add-friend');
const friendsEl = document.querySelector('.friends');
const friendInputEl = document.getElementById('friend-input');
const mushroomsEl = document.querySelector('.mushrooms');
const addMushroomButton = document.getElementById('add-mushroom-button');
const addFriendButton = document.getElementById('add-friend-button');
// initialize state

let mushroomCount = 3;
let friends = '';

const friendData = [
    {
        name: 'Erich',
        satisfaction: 2,
    },
    {
        name: 'Sarah',
        satisfaction: 3,
    },
    {
        name: 'Missael',
        satisfaction: 1,
    },
    {
        name: 'Soraya',
        satisfaction: 2,
    },
];

addMushroomButton.addEventListener('click', () => {
    if (Math.random() > 0.5) {
        alert('found a mushroom!');

        mushroomCount++;
        displayMushrooms();
    } else {
        alert('no luck!');
    }
});

addFriendButton.addEventListener('click', () => {
    // get the name from the input
    const addFriendButton = friendInputEl.value;
    // create a new friend object
    const addFriendButton = {
        name: friends,
    };
    friends.push(friendData);
    // push it into the friends state array, passed in as an argument
    // clear out the input element
    friendInputEl.value = '';
    // clear out and display all the friends (use a function here)
    friendsEl.textcontent = '';
    for (let friend of friendData) {
        const addfriendEl = document.createElement('p');
        addfriendEl.textContent = friend;
        friendsEl.append(addfriendEl);
    }
});

function displayFriends() {
    // clear out the friends in DOM
    friendsEl.textContent = '';
    // for each friend in state . . .
    for (let friend of friendData) {
        // use renderFriend to make a friendEl
        const friendEl = renderFriend(friend);
        // this is a clickable list, so . . .
        //     add an event listener to each friend
        friendEl.addEventListener('click', () => {
            if (mushroomCount === 0) {
                alert('Go mushroom hunting to get more and share with your friends');
            }
            if (friend.satisfaction < 3 && mushroomCount > 0) {
                friend.satisfaction++;
                mushroomCount--;
                displayFriends();
                displayMushrooms();
            }
        });
        //         and if the friend's satisfaction level is below 3 and you have mushrooms left
        //             increment the friends satisfaction and decrement your mushrooms
        //             clear out and display the updated friends and mushrooms (hint: displayFriends, displayMushrooms)
        // append the friendEl to the friends list in DOM
        friendsEl.append(friendEl);
    }
}

function displayMushrooms() {
    // clear out the mushroom div
    mushroomsEl.textcontent = '';
    for (let i = 0; i < mushroomCount; i++) {
        // for each mushroom in your mushroom state, render and append a mushroom
        const mushroomEl = renderMushroom();
        mushroomEl.append(mushroomEl);
    }
}

displayFriends();
displayMushrooms();
