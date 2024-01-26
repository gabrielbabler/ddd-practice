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
});