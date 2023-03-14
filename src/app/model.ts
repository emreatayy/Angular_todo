export class Model {
    user;
    items;

    constructor(){
        this.user="Emre"
        this.items= [
            new toDoItems("Spor", false),
            new toDoItems("Kahvaltı", false),
            new toDoItems("Kitap Okuma", false),
            new toDoItems("Sinema", false),
        ];
    }
}

export class toDoItems {
    description;
    action;

    constructor(description : string, action : boolean){
        this.description = description;
        this.action = action;

    }
}