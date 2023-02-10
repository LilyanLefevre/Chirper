export class Company {
    private readonly _name: string;
    private readonly _catchPhrase: string;
    private readonly _bs: string;

    constructor(data: any) {
        this._name = data ? data.name : 'Default Inc.';
        this._catchPhrase = data ? data.catchPhrase :'Be you, be proud of you, because you can be do what we want to do.';
        this._bs = data ? data.bs : 'default';
    }
    get bs(): string {
        return this._bs;
    }

    get catchPhrase(): string {
        return this._catchPhrase;
    }

    get name(): string {
        return this._name;
    }
}