var Controller = {
    musicRoute: function() {
        return Model.getMusic().then(function(music) {
            results.innerHTML = View.render('music', {list: music});
        });
    },
    friendsRoute: function() {
        return Model.getFriends().then(function(friends) {
            results.innerHTML = View.render('friends', {list: friends});
        });
    },
    newsRoute: function() {
        return Model.getNews().then(function(news) {
            results.innerHTML = View.render('news', {list: news.items});
        });
    },
    groupsRoute: function() {
        return Model.getGroups().then(function(groups) {
            console.log(groups);
            results.innerHTML = View.render('groups', {list: groups.items});
        })
    },
    photosRoute: function() {
        return Model.getPhotos().then(function(photos) {

            let neededCountOfQueries = Math.ceil(photos.count/200),
                currentOffset = 0,
                currentPhotos = photos;

            for (let i = 1; i < neededCountOfQueries; i++) {
                currentOffset += 200;
                Model.getPhotos(200).then(function(anotherPhotos) {
                    for (let b = currentOffset; b < currentOffset + anotherPhotos.items.length; b++) {
                        let n = 0;
                        currentPhotos.items[currentOffset - 1] = anotherPhotos.items[n];
                        n++
                        console.log('сработало')
                    }
                })

            }

            console.log(currentPhotos);
            console.log(photos);
            console.log(neededCountOfQueries)
            results.innerHTML = View.render('photos', {list: currentPhotos.items});
        })
    }

};
