export default class OrderItem {
    
    private _id: string;
    private _productId: string;
    private _name: string;
    private _price: number;
    private _quantity: number;

    constructor(id: string, productId: string, name: string, price: number, quantity: number) {
        this._id = id;
        this._productId = productId;
        this._name = name;
        this._price = price;
        this._quantity = quantity;
    }

    get price(): number {
        return this._price;
    }

    get quantity(): number {
        return this._quantity;
    }

    validate(): boolean {
        if(this._quantity <= 0) {
            throw new Error("Item quantity must be greater than 0");
        }
        return true;
    }

    orderItemTotal(): number {
        this.validate();
        return this._price * this._quantity;
    }
}