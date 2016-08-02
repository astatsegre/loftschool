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
            
            let sortFriendsByBD = function(a, b) {
                if (a.bdate === undefined) {
                    return 1;
                };

                if (b.bdate === undefined) {
                    return -1;
                };

                if (a.bdate.length < 8) {
                    return 1;
                };

                if (b.bdate.length <8) {
                    return -1;
                };

                let splitedBDA = a.bdate.split('.');
                let splitedBDB = b.bdate.split('.');

                if (splitedBDA[2] > splitedBDB[2]) {
                    return -1;
                } else if(splitedBDA[2] < splitedBDB[2]) {
                    return 1;
                } else {
                    if (splitedBDA[1] > splitedBDB[1]) {
                        return -1;
                    } else if (splitedBDA[1] < splitedBDB[1]) {
                        return 1;
                    } else {
                        if (splitedBDA[0] > splitedBDB[0]) {
                        return -1;
                    } else if (splitedBDA[0] < splitedBDB[0]) {
                        return 1;
                    } else {
                        return -1;
                    }
                    }

                };
            };
       
            response.response.sort(sortFriendsByBD);

            let source = document.getElementById('friendsList').innerHTML,
                templateFn = Handlebars.compile(source),
                template = templateFn({list: response.response});
            
            results.innerHTML = template;
            
        }
    })
})


let sortFriendsByBD = function(a, b) {
    if (a.bdate === undefined) {
        return -1;
    };
    
    if (b.bdate === undefined) {
        return 1;
    };
    
    if (a.bdate.length < 8) {
        return -1;
    };
    
    if (b.bdate.length <8) {
        return 1;
    };
    
    let splitedBDA = a.bdate.split('.');
    let splitedBDB = b.bdate.split('.');
    
    if (splitedBDA[2] > splitedBDB[2]) {
        return 1;
    } else if(splitedBDA[2] < splitedBDB[2]) {
        return -1;
    } else {
        if (splitedBDA[1] > splitedBDB[1]) {
            return 1;
        } else if (splitedBDA[1] < splitedBDB[1]) {
            return -1;
        } else {
            if (splitedBDA[0] > splitedBDB[0]) {
            return 1;
        } else if (splitedBDA[0] < splitedBDB[0]) {
            return -1;
        } else {
            return 1;
        }
        }
    
    };
}


