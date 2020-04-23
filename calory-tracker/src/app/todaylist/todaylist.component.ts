import { Component, OnInit } from '@angular/core';
import { items } from './../../items';
import { menuitems } from './../../menuitems';

@Component({
  selector: 'app-todaylist',
  templateUrl: './todaylist.component.html',
  styleUrls: ['./todaylist.component.css'],
})
export class TodaylistComponent implements OnInit {
  constructor() {}

  items: menuitems[];
  newItem: any = {};

  ngOnInit(): void {
    this.items = items;
  }
}
