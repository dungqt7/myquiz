import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  public file_src = '../assets/images/300.png';

  constructor() { }
  customStyle = {
    selectButton: {
      'background-color': '#007bff',
      'color': 'white',
      'width' : '150px',
      'font-size': '14px',
    },
    clearButton: {
      'background-color': '#dc3545',
      'color': 'white',
      'margin-left': '10px',
      'width' : '150px',
      'font-size': '14px',
    },
    layout: {
      'background-color': 'blue',
      'border-radius': '25px',
      'color': '#FFF',
      'font-size': '15px',
      'margin': '10px',
      'padding-top': '5px',
      'width': '500px'
    },
    previewPanel: {
      'background-color': 'blue',
      'border-radius': '0 0 25px 25px',
      'width' : '400px',
    }
  };
  // onUploadFinished(file: any) {
  //    $('img').hide();
  // }
  // onRemoved(file: any) {
  //   $('img').show();
  // }
  ngOnInit() {
  }

}
