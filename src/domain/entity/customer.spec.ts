import Address from "./address";
import Customer from "./customer";
import CustomerAggregate from "./customer";

describe("Customer unit tests", () => {
    
    it("should throw an error if id not present", () => {
        expect(() => {
            let customer = new CustomerAggregate("", "John");
        }).toThrow("Id is required");
    });

    it("should throw an error if name not present", () => {
        expect(() => {
            let customer = new CustomerAggregate("1", "");
        }).toThrow("Name is required");
    });

    it("should change name", () => {
        //Arrange
        const customer = new CustomerAggregate("123", "John");
        
        //Act
        customer.changeName("Gabriel");

        //Assert
        expect(customer.name).toBe("Gabriel");
    });

    it("should activate customer", () => {
        const customer = new CustomerAggregate("123", "John");
        const address = new Address("Rua 1", 12, "12345-678", "Sao Paulo");
        customer.Address = address;
        
        customer.activate();

        expect(customer.isActive()).toBe(true);
    });

    it("should desactivate customer", () => {
        const customer = new CustomerAggregate("123", "John");
        
        customer.deactivate();

        expect(customer.isActive()).toBe(false);
    });

    it("should throw an error when activating and address undefined", () => {
        expect(() => {
            const customer = new CustomerAggregate("123", "John");
            customer.activate();
        }).toThrow("Address is mandatory to activate a customer");
    });

    it("should add reward points", () => {
        const customer = new Customer("1", "Customer 1");
        expect(customer.rewardPoints).toBe(0);

        customer.addRewardPoints(10);

        expect(customer.rewardPoints).toBe(10);

        customer.addRewardPoints(10);

        expect(customer.rewardPoints).toBe(20);
    });
});