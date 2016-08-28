var Model = {
    offsetNumber: -200,
    login: function(appId, perms) {
        return new Promise(function(resolve, reject) {
            VK.init({
                apiId: appId
            });

            VK.Auth.login(function(response) {
                if (response.session) {
                    resolve(response);
                } else {
                    reject(new Error('Не удалось авторизоваться'));
                }
            }, perms);
        });
    },
    callApi: function(method, params) {
        return new Promise(function(resolve, reject) {
            VK.api(method, params, function(response) {
                if (response.error) {
                    reject(new Error(response.error.error_msg));
                } else {
                    resolve(response.response);
                }
            });
        });
    },
    getUser: function() {
        this.offsetNumber = 0;
        return this.callApi('users.get', {});
    },
    getMusic: function() {
        this.offsetNumber = 0;
        return this.callApi('audio.get', {});
    },
    getFriends: function() {
        this.offsetNumber = 0;
        return this.callApi('friends.get', {fields: 'photo_100'});
    },
    getNews: function() {
        this.offsetNumber = 0;
        return this.callApi('newsfeed.get', {filters: 'post', count: 20});
    },
    getGroups: function() {
        this.offsetNumber = 0;
        return this.callApi('groups.get', {extended: 1, v: '5.53'});
    },
    getPhotos: function() {
//        console.log('работает');
        this.offsetNumber += 200;
//        console.log(this.offsetNumber);
        return this.callApi('photos.getAll', {extended: 1, count: 200, offset: this.offsetNumber, v: '5.53'} )
    },
    getPhotosIds: function(ids) {
        return this.callApi('photos.getById', {photos: ids, extended: 1, v: '5.53'})
    }
};
