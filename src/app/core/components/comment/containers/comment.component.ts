import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() comment: any;

  constructor() { }

  ngOnInit(): void {
  }

}
