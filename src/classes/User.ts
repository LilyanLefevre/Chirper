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
        this._id = data.id;
        this._name = data.name;
        this._username = data.username;
        this._email = data.email;
        this._address = data.address;
        this._phone = data.phone;
        this._website = data.website;
        this._company = data.company;
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
