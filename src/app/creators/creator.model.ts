export class Creator {
    public cre_id: number;
    public cre_name: string;
    public cre_description: string;
    public cre_images: string[];

    constructor(cre_id: number, cre_name: string, cre_description: string, cre_images: string[]) {
        this.cre_id = cre_id;
        this.cre_name = cre_name;
        this.cre_description = cre_description;
        this.cre_images = cre_images;
    }
}