import { Injectable } from '@angular/core';
import {Assignment} from '../assignments/assignment.model';
import {Observable, of} from 'rxjs';
import { LoggingService } from './logging.service';

@Injectable({
  // permet d'éviter de l'ajouter dans les modules....
  providedIn: 'root'
})
export class AssignmentsService {

  constructor(private logginService:LoggingService) { }

  assignments:Assignment[] = [
    {
      nom:"TP WebComponents INTENSE",
      dateDeRendu:new Date('2020-11-17'),
      rendu:true
    },
    {
      nom:"TP Angular INTENSE",
      dateDeRendu:new Date('2020-12-03'),
      rendu:false
    },
    {
      nom:"TP React INTENSE",
      dateDeRendu:new Date('2021-01-10'),
      rendu:false
    },
  ];

  getAssignments():Observable<Assignment[]> {
    return of(this.assignments);
  }

  addAssignment(assignment:Assignment):Observable<string> {
    this.assignments.push(assignment);

    this.logginService.log(assignment.nom, "ajouté");

    return of("assignemt ajouté");
  }

  updateAssignment(assignment:Assignment):Observable<string> {
    this.assignments.forEach((a, index) => {
      if(a === assignment) {
        this.assignments[index] = assignment;
      }
    });
    this.logginService.log(assignment.nom, "modifié");

    /*
    let pos = this.assignments.indexOf(assignment);
    this.assignments[pos] = assignment;
    */

    return of("assignmentt modifié");
  }

  deleteAssignment(assignment:Assignment):Observable<string> {
    let pos = this.assignments.indexOf(assignment);
    this.assignments.splice(pos, 1);

    this.logginService.log(assignment.nom, "supprimé");

    return of("assignment supprimé");
  }
}
