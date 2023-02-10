export class Geo {
    private readonly _lat: string;
    private readonly _lng: string;

    constructor(data: any) {
        this._lat = data ? data.lat : '47.6294444';
        this._lng = data ? data.lng : '6.152500000000001';
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

    constructor(data: any) {
        this._street = data ? data.street : 'Grande rue';
        this._suite = data ? data.suite : '';
        this._city = data ? data.city : 'Vesoul';
        this._zipcode = data ? data.zipcode : '70000';
        this._geo = new Geo(data ? data.geo : null);
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