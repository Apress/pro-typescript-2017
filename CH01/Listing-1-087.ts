class CustomerId {
    constructor(private customerIdValue: number) {
    }

    get value() {
        return this.customerIdValue;
    }
}

class Customer {
    constructor(public id: CustomerId, public name: string) {

    }
}

interface Repository<T, TId> {
    getById(id: TId): T;
    persist(model: T): TId;
}

class CustomerRepository implements Repository<Customer, CustomerId> {
    constructor(private customers: Customer[]) {

    }

    getById(id: CustomerId) {
        return this.customers[id.value];
    }

    persist(customer: Customer) {
        this.customers[customer.id.value] = customer;
        return customer.id;
    }
}
