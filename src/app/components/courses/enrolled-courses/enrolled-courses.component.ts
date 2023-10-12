import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enrolled-courses',
  templateUrl: './enrolled-courses.component.html',
  styleUrls: ['./enrolled-courses.component.css']
})
export class EnrolledCoursesComponent implements OnInit {
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
