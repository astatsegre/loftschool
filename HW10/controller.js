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
//            console.log(groups);
            results.innerHTML = View.render('groups', {list: groups.items});
        })
    },
    photosRoute: function() {
//        console.log('сработало!');
//        console.log('сработало!');
        return Model.getPhotos().then(function(photos) {

            let neededCountOfQueries = Math.ceil(photos.count/200),
                currentOffset = 0,
                currentPhotos = photos;


            let addPhotos = function(currentPhotos, init){
                if (init === undefined) {
                    init = 1;
                };

                if (init < neededCountOfQueries) {
                    Model.getPhotos().then(function(photos) {

                        for (let i = 0; i < photos.items.length; i++) {
                            let amountOfCurrentPhotos = currentPhotos.items.length;
                            currentPhotos.items[amountOfCurrentPhotos] = photos.items[i];
                        }

                        return currentPhotos
                    }).then(function(currentPhotos) {
                    init++
//                    console.log(currentPhotos);
                    return addPhotos(currentPhotos, init)
                    })

                } else {

                        let photosIds = [];
                        currentPhotos.items.forEach(function(item, i, arr) {
                            photosIds[i] = item.owner_id + '_' + item.id;
                        });
                        let photosIdsStr = photosIds.join(',');

                        console.log(photosIdsStr);

                        Model.getPhotosIds(photosIdsStr).then(function(idsOfPhotos) {

                            console.log(idsOfPhotos);

                            currentPhotos.items.forEach(function(item, i, arr) {
                               item.commentsCount = idsOfPhotos[i].comments.count
                            });
                        }).then(function() {
                            results.innerHTML = View.render('photos', {list: currentPhotos.items});
                        });
                }
            }
                addPhotos(currentPhotos);
        });
    }
}







