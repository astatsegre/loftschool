let leftListFriends = document.querySelector('.left-list-friends'),
    rightListFriends = document.querySelector('.right-list-friends'),
    searchLeft = document.querySelector('.search-left'),
    searchRight = document.querySelector('.search-right'),
    currentElement,
    offsetX = 0,
    offsetY = 0,
    p = new Promise(function(resolve, reject){

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
        });
p.then(() => {
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
            rightListFriends.children[i].style.display = 'none';
        };

        let leftListBeforeStorage = document.querySelectorAll('.left-list-friends .friend'),
            rightListBeforeStorage = document.body.querySelectorAll('.right-list-friends .friend'),
            rightListForStorage = {},
            leftListForStorage = leftListBeforeStorage.map( (item, i, arr) => {

                return {
                    id: item.dataset.friendId,
                    position: item.dataset.position,
                    display: item.style.display,
                }

            });

        console.log(leftListBeforeStorage);
        console.log(rightListBeforeStorage);

         console.log(leftListForStorage);



    }
    })
}).then( () => {
    let leftListBeforeStorage = document.querySelectorAll('.left-list-friends .friend');
    let rightListBeforeStorage = document.body.querySelectorAll('.right-list-friends .friend');
    let rightListForStorage = {};
    let leftListForStorage = {};

//    console.log(leftListBeforeStorage);
//    console.log(rightListBeforeStorage);


})

searchLeft.addEventListener('input', () => {

    let searchLeftValue = searchLeft.value.toLowerCase();

    for (let i = 0; i < leftListFriends.children.length; i++) {

        if ( leftListFriends.children[i].dataset.position == 'right') continue;

        if ( leftListFriends.children[i].children[1].innerHTML.toLowerCase().indexOf(searchLeftValue) != -1 ) {
            leftListFriends.children[i].style.display = 'block';
        } else {
            leftListFriends.children[i].style.display = 'none';
        }
    }
});

searchRight.addEventListener('input', () => {

    let searchRightValue = searchRight.value.toLowerCase();

    for (let i = 0; i < rightListFriends.children.length; i++) {

        if ( rightListFriends.children[i].dataset.position == 'left') continue;

        if ( rightListFriends.children[i].children[1].innerHTML.toLowerCase().indexOf(searchRightValue) != -1 ) {
            rightListFriends.children[i].style.display = 'block';
        } else {
            rightListFriends.children[i].style.display = 'none';
        }
    }
});

document.addEventListener('click', (e) => {

    let target = e.target,
        currentClassName = target.className,
        currentFriendID = target.parentNode.dataset.friendId,
        friendsWithCurrentId = document.querySelectorAll(`div[data-friend-id='${currentFriendID}']`);

    if (currentClassName.indexOf('icon-plus-friend') == -1 && currentClassName.indexOf('icon-cancel-friend') == -1 ) return;

    if ( currentClassName.indexOf('icon-plus-friend') != -1 ) {

        friendsWithCurrentId[0].style.display = 'none';
        friendsWithCurrentId[1].style.display = 'block';
        friendsWithCurrentId[0].dataset.position = 'right';
        friendsWithCurrentId[1].dataset.position = 'right';

        } else if ( currentClassName.indexOf('icon-cancel-friend') != -1 ) {

            friendsWithCurrentId[0].style.display = 'block';
            friendsWithCurrentId[1].style.display = 'none';
            friendsWithCurrentId[0].dataset.position = 'left';
            friendsWithCurrentId[1].dataset.position = 'left';

        }
});

document.addEventListener('mousedown', (e) => {
    
    currentElement = e.target;

    if (currentElement.className == 'friend') {

        offsetX = e.offsetX;
        offsetY = e.offsetY;

        currentElement.style.position = 'fixed';
        currentElement.style.zIndex = '100';
        currentElement.style.top = e.clientY - offsetY + 'px';
        currentElement.style.left = e.clientX - offsetX + 'px';

    } else if (currentElement.className == 'friend-photo') {
        
        offsetX = e.offsetX;
        offsetY = e.offsetY;

        currentElement.parentNode.style.position = 'fixed';
        currentElement.parentNode.style.zIndex = '100';
        currentElement.parentNode.style.top = e.clientY - offsetY + 'px';
        currentElement.parentNode.style.left = e.clientX - offsetX + 'px';

    } else if (currentElement.className == 'friend-name') {
        
        offsetX = e.offsetX;
        offsetY = e.offsetY;

        currentElement.parentNode.style.position = 'fixed';
        currentElement.parentNode.style.zIndex = '100';
        currentElement.parentNode.style.top = e.clientY - offsetY + 'px';
        currentElement.parentNode.style.left = e.clientX - offsetX + 'px';

    } else if (currentElement.className == 'icon-plus') {
        
        offsetX = e.offsetX;
        offsetY = e.offsetY;

        currentElement.parentNode.style.position = 'fixed';
        currentElement.parentNode.style.zIndex = '100';
        currentElement.parentNode.style.top = e.clientY - offsetY + 'px';
        currentElement.parentNode.style.left = e.clientX - offsetX + 'px';

    }
    
});

document.addEventListener('mouseup', (e) => {
    
    let currentClientWidth = document.body.clientWidth,
        halfCurrentClientWidth = currentClientWidth / 2,
        target = e.target,
        currentClassName = target.className,
        currentFriendID,
        friendsWithCurrentId;



    if (currentClassName == 'friend') {

        currentFriendID = target.dataset.friendId,
        friendsWithCurrentId = document.querySelectorAll(`div[data-friend-id='${currentFriendID}']`);

    } else if (currentClassName == 'friend-photo') {

        currentFriendID = target.parentNode.dataset.friendId,
        friendsWithCurrentId = document.querySelectorAll(`div[data-friend-id='${currentFriendID}']`);

    } else if (currentClassName == 'friend-name') {

        currentFriendID = target.parentNode.dataset.friendId,
        friendsWithCurrentId = document.querySelectorAll(`div[data-friend-id='${currentFriendID}']`);

    } else if (currentClassName == 'icon-plus') {

        currentFriendID = target.parentNode.dataset.friendId,
        friendsWithCurrentId = document.querySelectorAll(`div[data-friend-id='${currentFriendID}']`);

    }




    
//    console.log(target);
//    console.log(currentClassName);
//    console.log(currentFriendID);
//    console.log(friendsWithCurrentId);
    
    
    if (e.clientX > halfCurrentClientWidth) {
        friendsWithCurrentId[0].style.display = 'none';
        friendsWithCurrentId[1].style.display = 'block';
        friendsWithCurrentId[0].dataset.position = 'right';
        friendsWithCurrentId[1].dataset.position = 'right';
        friendsWithCurrentId[0].style.position = 'static';
        friendsWithCurrentId[1].style.position = 'static';
        currentElement = undefined;
    } else if (e.clientX < halfCurrentClientWidth) {
        friendsWithCurrentId[0].style.display = 'block';
        friendsWithCurrentId[1].style.display = 'none';
        friendsWithCurrentId[0].dataset.position = 'left';
        friendsWithCurrentId[1].dataset.position = 'left';
        friendsWithCurrentId[0].style.position = 'static';
        friendsWithCurrentId[1].style.position = 'static';
        currentElement = undefined;
    }

});

document.addEventListener('mousemove', (e) => {
    
    
//    
//    console.log(currentClientWidth);
//    console.log(halfCurrentClientWidth);
    

    if (currentElement.className == 'friend') {
    
    currentElement.style.top = e.clientY - offsetY + 'px';
    currentElement.style.left = e.clientX - offsetX + 'px';

    } else if (currentElement.className == 'friend-photo') {

    currentElement.parentNode.style.top = e.clientY - offsetY + 'px';
    currentElement.parentNode.style.left = e.clientX - offsetX + 'px';

    } else if (currentElement.className == 'friend-name') {

    currentElement.parentNode.style.top = e.clientY - offsetY + 'px';
    currentElement.parentNode.style.left = e.clientX - offsetX + 'px';

    } else if (currentElement.className == 'icon-plus') {

    currentElement.parentNode.style.top = e.clientY - offsetY + 'px';
    currentElement.parentNode.style.left = e.clientX - offsetX + 'px';

    }

});

console.log(leftListFriends);








