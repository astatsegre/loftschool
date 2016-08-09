let leftList = document.querySelector('.left-list');
console.log(leftList);

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
        let source = document.getElementById('friendsList').innerHTML,
            templateFn = Handlebars.compile(source),
            template = templateFn({list: response.response});

        leftList.innerHTML = template;
    }
    })
})




