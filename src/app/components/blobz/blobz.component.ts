import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blobz',
  templateUrl: './blobz.component.html',
  styleUrls: ['./blobz.component.css']
})
export class BlobzComponent implements OnInit {

  constructor() { }

  @Input() type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

  @Input() index: string;

  @Input() color: string;

  @Input() class: string;

  ngOnInit(): void {
  }

}

