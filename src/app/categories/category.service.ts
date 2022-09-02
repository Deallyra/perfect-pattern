import { Injectable } from "@angular/core";
import { Category } from "./category.model";

@Injectable({
    providedIn: 'root'
 })
 export class CategoryService {

    constructor() { }

    private categories: Category[] = [
        new Category(
            1, 'Femmes', 0
        ), 
        new Category(
            2, 'Hauts', 1
        ), 
        new Category(
            3, 'Top', 2
        ),
        new Category(
            4, 'Hommes', 0
        ), 
        new Category(
            5, 'Hauts', 4
        ),
        new Category(
            6, 'Enfants', 0
        ), 
        new Category(
            7, 'Hauts', 6
        )
    ];

    getCategories() {
        return this.categories.slice();
    }
 }

