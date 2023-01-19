// import functions and grab DOM elements
import { renderMushroom, renderFriend } from './render-utils.js';
const friendsEl = document.querySelector('.friends');
const friendInputEl = document.getElementById('friend-input');
const mushroomsEl = document.querySelector('.mushrooms');
const addMushroomButton = document.getElementById('add-mushroom-button');
const addFriendButton = document.getElementById('add-friend-button');
// initialize state
let names = [];
let mushroomCount = 3;

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
    const newFriendName = friendInputEl.value;
    // create a new friend object
    const newFriend = {
        name: newFriendName,
        satisfaction: 1,
    };

    // push it into the friends state array, passed in as an argument
    friendData.push(newFriend);
    // clear out the input element
    friendInputEl.value = 'max';
    // clear out and display all the friends (use a function here)
    friendsEl.textContent = '';
    displayFriends();

    // for (let friend of friendData) {
    //     const renderFriend = document.createElement('p');
    //     renderFriend.textContent = friend;
    //     friendsEl.append(renderFriend);
    // }
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
            //         and if the friend's satisfaction level is below 3 and you have mushrooms left
            if (mushroomCount === 0) {
                alert('Go mushroom hunting to get more and share with your friends');
                return;
            }
            if (friend.satisfaction < 3 && mushroomCount > 0) {
                //             increment the friends satisfaction and decrement your mushrooms
                friend.satisfaction++;
                mushroomCount--;
                //             clear out and display the updated friends and mushrooms (hint: displayFriends, displayMushrooms)
                displayFriends();
                displayMushrooms();
            }
            console.log(mushroomCount);
        });
        // append the friendEl to the friends list in DOM
        friendsEl.append(friendEl);
    }
}

function displayMushrooms() {
    // clear out the mushroom div
    mushroomsEl.textContent = '';
    console.log(mushroomsEl);
    for (let i = 0; i < mushroomCount; i++) {
        // for each mushroom in your mushroom state, render and append a mushroom
        const mushroomEl = renderMushroom();
        mushroomsEl.append(mushroomEl);
    }
}

displayFriends();
displayMushrooms();
