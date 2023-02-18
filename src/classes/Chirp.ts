import {User} from "./User";

export
class Chirp {
    private readonly _id: number;
    private readonly _user: User;
    private readonly _message: string;
    private readonly _date: Date;
    private readonly _likes: number;
    private readonly _rechirps: number;
    private readonly _comments: number;

    constructor(json: any = {
        id: 1,
        user: new User(null),
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, elit euismod congue bibendum, erat est blandit velit, vel blandit velit enim vel quam.\n',
        updated_at: '2023-02-02 20:00:00',
        created_at: '2022-02-01 08:00:00',
        likes: 1024,
        rechirps: 512,
        comments: 256
    }) {
        this._id = json.id;
        this._user = new User(json.user);
        this._message = json.message;
        this._date = new Date(json.updated_at ?? json.created_at);
        this._likes = json.likes;
        this._rechirps = json.rechirps;
        this._comments = json.comments;
    }

    get id(): number {
        return this._id;
    }

    get user(): User {
        return this._user;
    }

    get message(): string {
        return this._message;
    }

    get date(): Date {
        return this._date;
    }

    get comments(): number {
        return this._comments;
    }

    get likes(): number {
        return this._likes;
    }

    get rechirps(): number {
        return this._rechirps;
    }
}