import {Address} from "./Address";
import {Company} from "./Company";

export class User {
    private readonly _id: number;
    private readonly _name: string;
    private readonly _username: string;
    private readonly _email: string;
    private readonly _address: Address;
    private readonly _phone: string;
    private readonly _website: string;
    private readonly _company: Company;

    constructor(data: any) {
        this._id = data ? data.id : -1;
        this._name = data ? data.name : 'Lilyan Lefevre';
        this._username = data ? data.username : 'default';
        this._email = data ? data.email : 'default@default.com';
        this._address = new Address(data ? data.address : null);
        this._phone = data ? data.phone : '0000000000';
        this._website = data ? data.website : 'default.fr';
        this._company = new Company(data ? data.company : null);
    }

    get id(): number {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    get username(): string {
        return this._username;
    }

    get email(): string {
        return this._email;
    }

    get address(): Address {
        return this._address;
    }

    get phone(): string {
        return this._phone;
    }

    get website(): string {
        return this._website;
    }

    get company(): Company {
        return this._company;
    }
}
