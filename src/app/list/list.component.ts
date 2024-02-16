import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnChanges {
@Input() name='default';
@Output() onNameChange = new EventEmitter();
@Output() delete=new EventEmitter();
@Output() 

childName: string = "n";

ngOnChanges(changes: SimpleChanges) {
  //if (changes['childName']) {
    console.log("Child name changed: ", this.name);
  //}
}
  deleteName(){
    this.delete.emit("");
    
  }

  onParentNameChange() {
    this.onNameChange.emit(this.name);
  }
}
