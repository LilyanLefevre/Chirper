export class Trending {
    private readonly _name: string;
    private readonly _category: string;
    private readonly _chirps: number;

    constructor(data: any) {
        this._name = data ? data.name : 'Hamza';
        this._category = data ? data.category :'France';
        this._chirps = data ? data.chirps : 20000;
    }
    get name(): string {
        return this._name;
    }

    get category(): string {
        return this._category;
    }

    get chirps(): number {
        return this._chirps;
    }
}