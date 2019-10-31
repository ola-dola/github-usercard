/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
function getData() {
  axios.get('https://api.github.com/users/ola-dola')
    .then(response => {
      console.log(response.data);
      makeUserCard(response.data);
    })
    .catch(error => {
      console.log(error.message);
    });
}


/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/


/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

function makeUserCard(userObject) {
  //Creating elements
  const parentDiv = document.createElement('div');
  const userImage = document.createElement('img');
  const innerDiv = document.createElement('div');
  const nameOfUser = document.createElement('h3');
  const username = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');

  //Adding classes
  parentDiv.classList.add('card');
  innerDiv.classList.add('card-info');
  nameOfUser.classList.add('name');
  username.classList.add('username');

  //Adding textContent and src
  userImage.src = userObject.avatar_url;

  nameOfUser.textContent = userObject.name;
  username.textContent = userObject.login;
  location.textContent = userObject.location;
  profile.textContent = `Profile: `;
  followers.textContent = `Followers: ${userObject.followers}`;
  following.textContent = `Following: ${userObject.following}`;
  bio.textContent = `Bio: ${userObject.bio}`;

  // Appending
  innerDiv.append(nameOfUser, username, location, profile, followers, following, bio);
  parentDiv.append(userImage, innerDiv);

  //Adding to DOM
  let cards = document.querySelector('.cards');
  cards.appendChild(parentDiv);
 
}

getData();

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
