import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
})
export class Page1Page implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

  goToPage2() {
    this.router.navigateByUrl('tabs/tab1/page1/page2');
  }

}
