import Address from "./Aggregate/address";
import CustomerAggregate from "./Aggregate/customer";
import Order from "./Aggregate/order";
import OrderItem from "./Aggregate/order_item";

let customer = new CustomerAggregate("123", "Wesley");
const address = new Address("Rua 1", 2, "12345-678", "Sao Paulo");
customer.Address = address;
customer.activate();
//Relacao de ID
const item1 = new OrderItem("1", "Item 1", 10);
const item2 = new OrderItem("2", "Item 2", 15);
//Relacao de objeto
const order = new Order("1", "123", [item1, item2]);

