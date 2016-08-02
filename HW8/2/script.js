"use strict"

let results = document.getElementById('results');

new Promise ( (resolve, reject) => {
    VK.init({
    apiId: 5572145
});
    
    VK.Auth.login( response => {
        if (response.session) {
            resolve(response);
        } else {
            reject(new Error('Не удалось авторизироваться'));
        }
    }, 2)

}).then( () => {
    VK.api('friends.get', {'fields': 'photo_50,bdate'}, response => {
        if (response.error) {
            reject( new Error(response.error.error_msg) );
        } else {
            console.log(response);
            let source = document.getElementById('friendsList').innerHTML,
                templateFn = Handlebars.compile(source),
                template = templateFn({list: response.response});
            
            results.innerHTML = template;
            
        }
    })
})


