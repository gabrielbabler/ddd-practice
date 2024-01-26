import Customer from "../entity/customer";
import Order from "../entity/order";
import OrderItem from "../entity/order_item";
import OrderService from "./order.service";

describe("Order service unit test", () => {

    it("should get total of all orders", () => {
        const item1 = new OrderItem("123", "2", "Item 1", 10, 1);
        const item2 = new OrderItem("124", "3", "Item 2", 20, 4);

        const order1 = new Order("123", "22", [item1])
        const order2 = new Order("122", "21", [item2])

        const orders = [order1, order2];

        const total = OrderService.total(orders);

        expect(total).toBe(90);
    });

    it("should place an order", () => {
        const customer = new Customer("1", "Customer 1");
        const item1 = new OrderItem("i1", "p1", "Item 1", 10, 1);

        const order = OrderService.placeOrder(customer, [item1]);

        expect(customer.rewardPoints).toBe(5);
        expect(order.total()).toBe(10);
    });
});