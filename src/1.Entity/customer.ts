//Classe anemica, apenas carrega dados.
//100% do tempo os dados devem estar consistentes!
//Uma entidade por padrao ela sempre vai ter que se auto-validar!
//Entitade focada em negocio!

//Complexidade de negocio
//Domain
//- Entity
//- - customer.ts (regra de negocio)

//Complexidade acidental
// infra - Mundo externo
//- Entity / Model
//- - customer.ts (get, set)

class Customer {
    
    _id: string;
    _name: string;
    _address: string;
    _active: boolean;

    constructor(id: string, name: string, address: string, active: boolean) {
        this._id = id;
        this._name = name;
        this.validate();
        this._address = address;
        this._active = active;
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
        this._active = true;
    }

    deactivate() {
        this._active = false;
    }
}