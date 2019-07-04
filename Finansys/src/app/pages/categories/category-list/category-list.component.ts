import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

import { Category } from './../shared/category.model';
import { CategoriesService } from './../shared/categories.service';


@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})

export class CategoryListComponent implements OnInit {

  private items: MenuItem[];
  categoriesList: Category[] = [];

  constructor(private categoryService: CategoriesService) { }

  ngOnInit() {

    this.categoryService.getAll().subscribe(
      categories => this.categoriesList = categories,
      error => alert('erro ao carregar a lista')
    );

    this.items = [
      {label: 'Home', icon: 'pi pi-home', routerLink: '/'},
      {label: 'Categorias', },
    ];
  }

  deleteCategory(category) {
    const mustDelete = confirm('Deseja realmente excluir');
    if (mustDelete) {
      this.categoryService.delete(category.id).subscribe(
        () => this.categoriesList = this.categoriesList.filter( element => element !== category),
        () => alert('erro ao excluir')
      );
    }
  }

}
