import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  showChat(){
    if((document.getElementById('myForm') as HTMLDivElement).style.display == "block"){
      (document.getElementById('myForm') as HTMLDivElement).style.display = "none";
    } else{
      (document.getElementById('myForm') as HTMLDivElement).style.display = "block";
    }
  }
}
