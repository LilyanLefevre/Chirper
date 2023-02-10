export class Company {
    private readonly _name: string;
    private readonly _catchPhrase: string;
    private readonly _bs: string;

    constructor(name: string, catchPhrase: string, bs: string) {
        this._name = name;
        this._catchPhrase = catchPhrase;
        this._bs = bs;
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