import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {Assignment} from '../assignment.model';

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})
export class AddAssignmentComponent implements OnInit {
  @Output() nouvelAssignment = new EventEmitter<Assignment>();
  nomAssignment="";
  dateRendu:Date;

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log("onSubmit dans add-assignment")
    const nouvelAssignment = new Assignment();

    nouvelAssignment.nom = this.nomAssignment;
    nouvelAssignment.dateDeRendu = this.dateRendu;
    nouvelAssignment.rendu = false;

    //this.assignments.push(nouvelAssignment);
    // on envoie un événement appelé "nouvelAssignment" vers le père (ou autres..)
    this.nouvelAssignment.emit(nouvelAssignment);
  }

}
