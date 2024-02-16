import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent implements OnInit {
 @Input() visible:Boolean = false;
 @Input() notFoundMessage:String = "Nothing found!";
 @Input() resetLinkText:String = "Go to home page";
 @Input() resetLinkRoute:String = "/";

  constructor() { }
  ngOnInit(): void {
    
  }
}
