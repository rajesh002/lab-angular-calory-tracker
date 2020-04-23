import { Component, OnInit } from '@angular/core';
import { items } from './../../items';
import { menuitems } from './../../menuitems';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  searchContent: any;
  constructor() {}


  items: menuitems[];
  newItem: any = {};

  ngOnInit(): void {
    this.items = items;
  }


  search(str): any {
    //check whether the searched item in the food items objects list.
    if(){

    }
    return item;
  }
}
