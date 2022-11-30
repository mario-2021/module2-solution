(function () { 
    'use strict';

    angular.module('ShoppingListApp', [])
        .controller('ToBuyShoppingController', ToBuyShoppingController)
        .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
        .service('ShoppingListService', ShoppingListService);
    
    ToBuyShoppingController.$inject = ['ShoppingListService'];

    function ToBuyShoppingController(ShoppingListService) { 
        var shoppingList = this;

        shoppingList.items = ShoppingListService.buyListItems();

        shoppingList.buyItem = function (itemIndex) { 
            ShoppingListService.buyItem(itemIndex);
        };
    };

    AlreadyBoughtShoppingController.$inject = ['ShoppingListService'];

    function AlreadyBoughtShoppingController(ShoppingListService) { 
        var boughtList = this;

        boughtList.items = ShoppingListService.boughtListItems();

        boughtList.finishingShopping = function () { 
            return ShoppingListService.finishingShopping();
        };

        boughtList.removeItem = function (itemIndex) { 
            ShoppingListService.removeItem(itemIndex);
        };
    };

    function ShoppingListService() { 
        var service = this;

        var buyList = [
            {
                name: "Cookies",
                quantity: 10
            },{
                name: "Milk",
                quantity: 3
            },{
                name: "water",
                quantity: 5
            },{
                name: "Donuts",
                quantity: 12
            },{
                name: "Chips",
                quantity: 8
            },{
                name: "CocaCola",
                quantity: 5
            },{
                name: "Chocolate",
                quantity: 10
            },{
                name: "Peanut Butter",
                quantity: 2
            },{
                name: "Cupcake ",
                quantity: 6
            },{
                name: "Sweets and Candy",
                quantity: 3
            },
        ]

        var boughtList = [];

        service.buyListItems = function () { 
            return buyList;
        };

        service.boughtListItems = function () { 
            return boughtList;
        };

        service.buyItem = function (itemIndex) { 
            var item = buyList[itemIndex];
            buyList.splice(itemIndex, 1);
            boughtList.push(item);
        }; 

        service.finishingShopping = function () { 
            return buyList.length === 0;
        };

        service.removeItem = function (itemIndex) {
            boughtList.splice(itemIndex, 1);
        };

    };

})();