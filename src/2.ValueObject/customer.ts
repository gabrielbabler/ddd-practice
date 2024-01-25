import Address from "./address";

class CustomerVO {
    
    _id: string;
    _name: string = "";
    _address!: Address;
    _active: boolean = false;

    constructor(id: string, name: string) {
        this._id = id;
        this._name = name;
        this.validate();
    }

    validate() {
        if (this._name.length === 0) {
            throw new Error("Name is required");
        }
        if (this._id.length === 0) {
            throw new Error("Id is required");
        }
    }

    //mesmo resultado, porem eh um motivo de negocio
    changeName(name: string) {
        this._name = name;
        this.validate();
    }
    //mudanca de regras! a modelagem do dominio rico, expressa o negocio.
    activate() {
        if (this._address === undefined) {
            throw new Error("Address is mandatory to activate a customer")
        }
        this._active = true;
    }

    deactivate() {
        this._active = false;
    }

    set Address(address: Address) {
        this._address = address;
    }
}