import {User} from '../User/user.js'

export class Note{
    public id:number;
    public title:string;
    public content:string;
    public userId:User

    constructor(id:number , title: string, content:string, userId:User){
        this.id = id,
        this.title = title,
        this.content = content,
        this.userId = userId
    }

    preview(){
        return this.content.slice(0,20)
    }

}