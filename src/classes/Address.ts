export class Geo {
    private readonly _lat: string;
    private readonly _lng: string;

    constructor(lat: string, lng: string) {
        this._lat = lat;
        this._lng = lng;
    }

    get lng(): string {
        return this._lng;
    }

    get lat(): string {
        return this._lat;
    }
}

export class Address {
    private readonly _street: string;
    private readonly _suite: string;
    private readonly _city: string;
    private readonly _zipcode: string;
    private readonly _geo: {
        lat: string;
        lng: string;
    };

    constructor(street: string, suite: string, city: string, zipcode: string, geo: Geo) {
        this._street = street;
        this._suite = suite;
        this._city = city;
        this._zipcode = zipcode;
        this._geo = geo;
    }


    get geo(): { lat: string; lng: string } {
        return this._geo;
    }

    get zipcode(): string {
        return this._zipcode;
    }

    get city(): string {
        return this._city;
    }

    get suite(): string {
        return this._suite;
    }

    get street(): string {
        return this._street;
    }
}