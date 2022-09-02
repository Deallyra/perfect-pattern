import { TagService } from "src/app/tags/tag.service";
import { Tag } from "src/app/tags/tag.model";

export class Pattern {
    public pat_id: number;
    public pat_name: string;
    public pat_creator: string;
    pat_difficulty: number;
    public pat_description: string;
    public pat_images: string[];
    // public pat
    public pat_mar_id: number;
    public pat_cat_id: number;
    public pat_tags: number[];


    constructor(pat_id: number, pat_name: string, pat_creator: string, pat_difficulty: number, pat_description: string, pat_images: string[], pat_mar_id: number, pat_cat_id: number, pat_tags: number[]) {
        this.pat_id = pat_id;
        this.pat_name = pat_name;
        this.pat_creator = pat_creator;
        this.pat_difficulty = pat_difficulty;
        this.pat_description = pat_description;
        this.pat_images = pat_images;
        this.pat_mar_id = pat_mar_id;
        this.pat_cat_id = pat_cat_id;
        this.pat_tags = pat_tags;
    }
}
