var Listing_1_74;
(function (Listing_1_74) {
    var WarehouseLocation = /** @class */ (function () {
        function WarehouseLocation(aisle, slot) {
            this.aisle = aisle;
            this.slot = slot;
        }
        Object.defineProperty(WarehouseLocation.prototype, "stockItem", {
            get: function () {
                return this._stockItem;
            },
            set: function (item) {
                this._stockItem = item;
            },
            enumerable: true,
            configurable: true
        });
        return WarehouseLocation;
    }());
    var figure = { asin: 'B001TEQ2PI', description: 'Figure' };
    var warehouseSlot = new WarehouseLocation(15, 'A6');
    warehouseSlot.stockItem = figure;
})(Listing_1_74 || (Listing_1_74 = {}));
