// User click likes //
var userCountElement = document.querySelector("#user-likes");
var userCount = 3;
console.log(userCountElement);

function userLikes () {
    userCount ++;
    userCountElement.innerHTML = userCount;
    console.log(userCount); 
}