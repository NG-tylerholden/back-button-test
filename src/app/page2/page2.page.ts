import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.page.html',
  styleUrls: ['./page2.page.scss'],
})
export class Page2Page implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

  goToPage3() {
    this.router.navigateByUrl('tabs/tab1/page1/page2/page3');
  }

}
