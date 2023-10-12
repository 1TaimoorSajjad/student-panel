import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  isListView = true
  isGridView = false

  constructor() { }

  ngOnInit(): void {
  }

  changeView(view: any) {
    console.log(view)
    if (view == 'list') {
      this.isListView = true;
      this.isGridView = false;
    }
    else if (view == 'grid') {
      this.isGridView = true;
      this.isListView = false;
    }

  }

}
