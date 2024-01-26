import Address from "./entity/address";
import CustomerAggregate from "./entity/customer";
import Order from "./entity/order";
import OrderItem from "./entity/order_item";

let customer = new CustomerAggregate("123", "Wesley");
const address = new Address("Rua 1", 2, "12345-678", "Sao Paulo");
customer.Address = address;
customer.activate();
//Relacao de ID
const item1 = new OrderItem("1", "p1", "Item 1", 10, 1);
const item2 = new OrderItem("2","p2", "Item 2", 15, 2);
//Relacao de objeto
const order = new Order("1", "123", [item1, item2]);