import Order from "./order";
import OrderItem from "./order_item";

describe("Order unit tests", () => {

    it("should throw an error when id is empty", () => {
        expect(() => {
            let order = new Order("", "123", []);
        }).toThrow("Id is required");
    });
    
    it("should throw an error when customerId is empty", () => {
        expect(() => {
            let order = new Order("123", "", []);
        }).toThrow("CustomerId is required");
    });

    it("should throw an error when items is empty", () => {
        expect(() => {
            let order = new Order("123", "12", []);
        }).toThrow("Items are required");
    });

    it("should calculate total", () => {
        const item1 = new OrderItem("123", "Item 1", 10);
        const item2 = new OrderItem("1222", "Item 2", 15);

        const order = new Order("123", "22", [item1]);
        const total = order.total();

        expect(total).toBe(10);

        const order2 = new Order("123", "22", [item1, item2]);
        const total2 = order2.total();

        expect(total2).toBe(25);
    });

});