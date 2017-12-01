var CustomerId = /** @class */ (function () {
    function CustomerId(customerIdValue) {
        this.customerIdValue = customerIdValue;
    }
    Object.defineProperty(CustomerId.prototype, "value", {
        get: function () {
            return this.customerIdValue;
        },
        enumerable: true,
        configurable: true
    });
    return CustomerId;
}());
var Customer = /** @class */ (function () {
    function Customer(id, name) {
        this.id = id;
        this.name = name;
    }
    return Customer;
}());
var CustomerRepository = /** @class */ (function () {
    function CustomerRepository(customers) {
        this.customers = customers;
    }
    CustomerRepository.prototype.getById = function (id) {
        return this.customers[id.value];
    };
    CustomerRepository.prototype.persist = function (customer) {
        this.customers[customer.id.value] = customer;
        return customer.id;
    };
    return CustomerRepository;
}());
