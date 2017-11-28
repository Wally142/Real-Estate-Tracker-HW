myApp.service('HousingService', function ($http) {
    var self = this;

    self.listyObj = {
        room: []
    }

    self.listObj = {
        home: []
    };

    self.getSale = function(){
        $http({
            method: 'GET',
            url: '/housing'
        }).then(function (response) {
            console.log('get SALE response: ', response);
            self.listObj.home = response.data;
        });
    };

    self.getRent = function () {
        $http({
            method: 'GET',
            url: '/renting'
        }).then(function (response) {
            console.log('get RENT response: ', response);
            self.listyObj.room = response.data;
        });
    };

    self.postSale = function (newSale) {
        console.log('in service:', newSale);
        $http({
            method: 'POST',
            url: '/housing',
            data: newSale
        }).then(function (response) {
            console.log('in service POST with', response);
        })
    }

    self.postRent = function (newRent) {
        console.log('in service:', newRent);
        $http({
            method: 'POST',
            url: '/renting',
            data: newRent
        }).then(function (response) {
            console.log('in service POST with', response);
        })
    }

}); // end service function
    

