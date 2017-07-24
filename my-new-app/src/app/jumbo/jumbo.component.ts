import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jumbo',
  templateUrl: './jumbo.component.html',
  styleUrls: ['./jumbo.component.css']
})
export class JumboComponent implements OnInit {

private jbtHeading: string;
private jbtText: string;
private jbtBtnText: string;
private jbtBtnUrl: string;

  constructor() {
      this.jbtHeading='Hello World';
      this.jbtText='This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.';
      this.jbtBtnText= 'Read More';
      this.jbtBtnUrl= '/about';

    }

  ngOnInit() {
  }

}
