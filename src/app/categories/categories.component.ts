import { Component, OnInit } from '@angular/core';
import { Category } from './category.model';
import { CategoryService } from './category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories!: Category[];

  constructor(private CategoryService: CategoryService) { }

  ngOnInit(): void {
    this.categories = this.CategoryService.getCategories();
    // console.log(JSON.stringify(this.categories));
  }

}
