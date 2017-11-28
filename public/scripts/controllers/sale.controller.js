myApp.controller('SaleController', ['HousingService', function (HousingService){ 
    console.log('see SALE controller working');
    
    var vm = this;
    vm.fullList = HousingService.listObj;

    vm.getList = function () {
        console.log('got list');
        HousingService.getSale();
    };

    vm.postASale = function (){
        console.log('got a post/click');
        var newList = {
            cost: vm.costIn,
            sqft: vm.feetIn,
            city: vm.cityIn
        };
        HousingService.postSale(newList);
        vm.getList();
    }

}]); // end controller
