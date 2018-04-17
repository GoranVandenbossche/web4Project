import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  tijd: Date;
  text: string;
  sport: string;
  aanwezigen: string[];
  constructor() { 
    this.tijd = new Date();
    this.text = "mijn eerste post";
    this.sport = "sport";
    this.aanwezigen = ["vriendje1","vriendje2","vriendje3"];
  }

  ngOnInit() {
  }

}
