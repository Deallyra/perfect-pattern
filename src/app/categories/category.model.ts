export class Category {
    public cat_id: number;
    public cat_name: string;
    public cat_parent_id: number;

    constructor(cat_id: number, cat_name: string, cat_parent_id: number) {
        this.cat_id = cat_id;
        this.cat_name = cat_name;
        this.cat_parent_id = cat_parent_id;
    }
}