import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})

export class CategoryListComponent implements OnInit {

  private items: MenuItem[];
  categories: Category[] = [];
  
  constructor() { }
  
  ngOnInit() {
    
    this.items = [
      {label: 'Home', icon: 'pi pi-home', routerLink:'/'},
      {label: 'Categorias', },
    ];
  }

}
