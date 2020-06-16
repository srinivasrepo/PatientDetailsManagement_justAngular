import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-conformation',
  templateUrl: './conformation.component.html',
})
export class ConformationComponent {

  @Input() message: string;    
     
  constructor( public dialogRef: MatDialogRef<ConformationComponent>) {    }

  proceed() {
      this.dialogRef.close(true);
  }
  cancel() {
      this.dialogRef.close(false);
  }

}
