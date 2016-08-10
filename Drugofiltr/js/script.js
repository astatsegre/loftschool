let leftListFriends = document.querySelector('.left-list-friends'),
    rightListFriends = document.querySelector('.right-list-friends'),
    searchLeft = document.querySelector('.search-left');

new Promise(function(resolve, reject){

    VK.init({
    apiId: 5572145
});

VK.Auth.login(response => {
    if(response.session) {
        resolve();
    } else {
        alert('Не удалось авторизироваться');
        reject();
    }

}, 2);
}).then(() => {
    VK.api('friends.get', {'fields': 'photo_50'}, response => {
    if(response.error) {
        alert(response.error.error_msg);
    } else {
        console.log(response)
        let leftListSource = document.getElementById('friendsList').innerHTML,
            leftListTemplateFn = Handlebars.compile(leftListSource),
            leftListTemplate = leftListTemplateFn({leftList: response.response});

        leftListFriends.innerHTML = leftListTemplate;

        let rightListSource = document.getElementById('friendsList').innerHTML,
            rightListTemplateFn = Handlebars.compile(rightListSource),
            rightListTemplate = rightListTemplateFn({rightList: response.response});

        rightListFriends.innerHTML = rightListTemplate;

        for (let i = 0; i < rightListFriends.children.length; i++) {
//            rightListFriends.children[i].style.display = 'none';
        }

    }
    })
});

searchLeft.addEventListener('input', () => {

    let searchLeftValue = searchLeft.value.toLowerCase();

    for (let i = 0; i < leftListFriends.children.length; i++) {

        if ( leftListFriends.children[i].children[1].innerHTML.toLowerCase().indexOf(searchLeftValue) != -1 ) {
            leftListFriends.children[i].style.display = 'block';
        } else {
            leftListFriends.children[i].style.display = 'none';
        }
    }
});

document.addEventListener('click', (e) => {

    let target = e.target,
        currentClassName = target.className;

//    if (currentClassName.indexOf('icon-plus-friend') == -1) return;

    let currentFriendID = target.parentNode.id;

    console.log(currentFriendID);

//    target.parentNode.style.display = 'none';



})





