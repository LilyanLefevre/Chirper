export class User {
    private id: number;
    private completeName: string;
    private username: string;

    constructor(json: any = {
        id: 1,
        completeName: 'Lilyan Lefevre',
        username: 'lilyan_lfv'
    }) {
        this.id = json.id;
        this.completeName = json.completeName;
        this.username = json.username;
    }

    getId(): number {
        return this.id;
    }

    getCompleteName(): string {
        return this.completeName;
    }

    getUsername(): string {
        return this.username;
    }
}