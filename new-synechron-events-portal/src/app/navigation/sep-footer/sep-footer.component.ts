import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sep-footer',
  template: `
    <footer>
        Copyright {{now | date: 'y'}} - Synechron Technologies Pvt. Ltd.
    </footer>
  `,
  styles: []
})
export class SepFooterComponent implements OnInit {
  now = new Date();

  constructor() { }

  ngOnInit() {
  }

}
