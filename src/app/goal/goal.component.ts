import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  goals:Goal[] = [
    new Goal (1,'watch venom','wait for part two of the movie',new Date(2021,10,14)),
    new Goal (2, 'buy ps5', 'hustle to death to get hands on one', new Date(2021,5,4)),
    new Goal (3, 'learn angular', 'code...code...code till I get it...', new Date(2020,11,27))
   ]
 
   addNewGoal(goals:any){
     let goalLength = this.goals.length;
     goals.id = goalLength++;
     goals.completeDate = new Date(goals.completeDate)
     this.goals.unshift(goals)
   }
 
   toggleDetails(index:any){
     this.goals[index].showDescription = ! this.goals[index].showDescription
   }
 
   completeGoal(isComplete:any, index:any){
     if(isComplete){
       this.goals.slice(index, 1);
     }
   }
 
   deleteGoal(isComplete:any, index:any){
     if(isComplete){
       let toDelete = confirm(`Are you sure you want to delete " ${this.goals[index].name} " ?`)
 
       if(toDelete){
         this.goals.splice(index, 1)
       }
     }
   }
  constructor() { }

  ngOnInit() {
  }
}