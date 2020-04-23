import { Component, OnInit } from '@angular/core';
import { items } from './../../items';
import { menuitems } from './../../menuitems';

@Component({
  selector: 'app-app-food-list',
  templateUrl: './app-food-list.component.html',
  styleUrls: ['./app-food-list.component.css'],
})
export class AppFoodListComponent implements OnInit {
  constructor() {}

  items: menuitems[];
  newItem: any = {};

  ngOnInit(): void {
    this.items = items;
  }
  addcount(count, obj): any {
    obj.count += parseInt(count);
  }
}
