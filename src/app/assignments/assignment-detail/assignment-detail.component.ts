import { Component, Input, OnInit } from '@angular/core';
import {Assignment} from '../assignment.model';
import {AssignmentsService} from '../../shared/assignments.service';
@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css']
})
export class AssignmentDetailComponent implements OnInit {
  @Input() assignmentTransmis:Assignment;

  constructor(private assignmentService:AssignmentsService) { }

  ngOnInit(): void {
  }

  onAssignmentRendu() {
    this.assignmentTransmis.rendu = true;

    this.assignmentService.updateAssignment(this.assignmentTransmis)
      .subscribe((message) => console.log(message));

      this.assignmentTransmis=null;
  }

  onDelete() {
    this.assignmentService.deleteAssignment(this.assignmentTransmis)
    .subscribe((message) => console.log(message));

    this.assignmentTransmis=null;
  }
}
