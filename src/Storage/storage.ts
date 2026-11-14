


export class Storage<T> {
    private items: T[] = []

    constructor(items: T[] = []) {
        this.items = items
    }

    add(item : T){
        if(this.items.includes(item)) return {message: 'item alerdy found'}
        this.items.push(item)
    }

    remove(item:T){
        const foundItem = this.items.findIndex( i => i === item)
        if(foundItem === -1) return {message: "not found item"}
        this.items.splice(foundItem , 1)
        return {message: "delete successfully"}
    }

    getAll(){
        return this.items.slice()
    }

}