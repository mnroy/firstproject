import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  public user = "milon";
  public siteUrl = window.location.href;

  constructor() { }

  ngOnInit(): void {
  }

  gretUser() {
    return "Hello " + this.user;
  }

}
