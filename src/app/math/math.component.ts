import {Component, OnInit, trigger, state, transition, style, animate, HostListener} from '@angular/core';

import {Exercise} from "./exercise";
import {OperatorType} from "./operatorType";
import {ExerciseBuilder} from "./exerciseBuilder";
import {MathService} from "./shared/math.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'pvo-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.css'],
  animations: [
    // CHECK RESULT
    trigger('checkResultTrigger', [
      state('normal', style({
        transform: 'scale(1)',
        opacity: '1'
      })),
      transition('void => *', [
       // style({ opacity: '0',  transform: 'translateY(-40px)' }),
        style({ opacity: '0',  transform: 'scale(1.4)' }),
        //style({ opacity: '0',  transform: 'translateX(-10px) translateY(-10px) rotate(180deg) scale(4)', color: 'green' }),
        animate('500ms  ease-in-out')
      ])
    ]),
    // SMILE
    trigger('smileTrigger', [
      state('normal', style({
        transform: 'scale(1)',
        opacity: '1'
      })),
      transition('void => *', [
        style({ opacity: '0',  transform: 'translateY(20px)' }),
        //style({ opacity: '0',  transform: 'translateX(-10px) translateY(-10px) rotate(180deg) scale(4)', color: 'green' }),
        animate('500ms  ease-in-out')
      ])
    ])
   ]
})
export class MathComponent implements OnInit {

  private routeId;
  public dummyState: string = "normal";

  public exercise: Exercise;

  // constructor(private mathService: MathService) {
  //   this.routeId = "r1";
  // }

  constructor(private mathService: MathService, private route: ActivatedRoute) {
    this.routeId = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.exercise = this.mathService.getExerciseFromRouter(this.routeId);
  }

  // public next() {
  //
  //   if (this.exercise.task.inputResolved) {
  //     this.exercise.next(this.exercise.task);
  //   } else {
  //     this.exercise.check(this.exercise.task);
  //   }
  // }

  /**
   * clear inputTyped field on the current task
   */
  private clear(): void {
    this.exercise.task.inputTyped = null;
  }


  private createNew(): Exercise {
    return ExerciseBuilder
      .operatorType(OperatorType.Plus)
      .operandRange(0, 5)
      .operandCountRange(2, 2)
      .resultRange(0, 10)
      .taskCount(20)
      .create();
  }

}
