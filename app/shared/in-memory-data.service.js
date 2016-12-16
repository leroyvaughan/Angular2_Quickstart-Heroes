"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    //me thinks we can leverage this class with ajax call here
    InMemoryDataService.prototype.createDb = function () {
        var heroes = [
            { id: 1, name: 'El Shaddai' },
            { id: 2, name: 'Jesus' },
            { id: 3, name: 'Moses' },
            { id: 4, name: 'Job' },
            { id: 5, name: 'King David' },
            { id: 6, name: 'King Solomon' },
            { id: 7, name: 'Mother Theresa' },
            { id: 8, name: 'Elizabeth Warren' },
            { id: 9, name: 'Russell Wilson' },
            { id: 10, name: 'Batman' }
        ];
        return { heroes: heroes };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map