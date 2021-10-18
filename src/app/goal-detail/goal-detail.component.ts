import {  Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Goal} from '../goal';

@Component({
  selector: 'app-goal-details',
  templateUrl: './goal-details.component.html',
  styleUrls: ['./goal-details.component.css']
})
export class GoalDetailsComponent implements OnInit {

  // @Input () goals:Goal;
  @Output() isComplete= new EventEmitter<boolean>();

  goalDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
  constructor() { }

  ngOnInit() {
  }

}