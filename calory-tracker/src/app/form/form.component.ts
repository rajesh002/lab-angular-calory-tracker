import { items } from './../../items';
import { menuitems } from './../../menuitems';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  items: menuitems[];
  newItem: any = {};
  constructor() {}

  ngOnInit(): void {
    this.items = items;
  }
  addItem(newItem): any {
    console.log('Add item has been called');
    console.log(newItem);
    // Fill your code here
    // add contact to contacts list
    // clear inputs
    newItem.count = 0;
    this.items.unshift(newItem);
  }
}
