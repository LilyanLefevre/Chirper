import {User} from "./User";

export
class Tweet {
    private id: number;
    private user: User;
    private message: string;
    private date: Date;
    private likes: number;
    private retweets: number;
    private comments: number;

    constructor(json: any = {
        id: 1,
        user: new User(),
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, elit euismod congue bibendum, erat est blandit velit, vel blandit velit enim vel quam.\n',
        updated_at: '2023-02-02 20:00:00',
        created_at: '2022-02-01 08:00:00',
        likes: 1024,
        retweets: 512,
        comments: 256
    }) {
        this.id = json.id;
        this.user = new User(json.user);
        this.message = json.message;
        this.date = new Date(json.updated_at ?? json.created_at);
        this.likes = json.likes;
        this.retweets = json.retweets;
        this.comments = json.comments;
    }

    getId(): number {
        return this.id;
    }

    getUser(): User {
        return this.user;
    }

    getMessage(): string {
        return this.message;
    }

    getDate(): Date {
        return this.date;
    }

    getComments(): number {
        return this.comments;
    }

    getLikes(): number {
        return this.likes;
    }

    getRetweets(): number {
        return this.retweets;
    }
}