myApp.controller('RentController', ['HousingService', function (HousingService) { 
    console.log('see RENT controller working');

    var vm = this;
    vm.fullList = HousingService.listyObj;

    vm.showRent = function(){
        console.log('SHOW RENT WORKED');
        HousingService.getRent();
    }

    vm.postARent = function () {
        console.log('got a post/click');
        var newList = {
            rent: vm.rentIn,
            sqft: vm.feetIn,
            city: vm.cityIn
        };
        HousingService.postRent(newList);
        vm.showRent();
    }


}]);// end controller


