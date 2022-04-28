import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  public user = "milon";
  public siteUrl = window.location.href;
  public myId = "test id";

  // class binding
  public PinkColor = "pink-color";
  public orangeColor = "orange-color";
  public special = "text-Special";
  public hasEror = false;
  // multiClass
  public messageClass = {
    "pink-color": !this.hasEror,
    "orange-color": this.hasEror,
    "text-Special": this.special,
  }
  // style bindding
  public highLightColor = "hotPink";
  public multiStyle = {
    fontStyle: "italic",
    fontWeith: "bold",
    backgroundColor: "orange",
  }


  constructor() { }

  ngOnInit(): void {
  }

  gretUser() {
    return "Hello " + this.user;
  }

}
