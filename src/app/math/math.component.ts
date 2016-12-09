import {Component, OnInit} from '@angular/core';

import {Exercise} from "./exercise";
import {OperatorType} from "./operatorType";
import {ExerciseBuilder} from "./exerciseBuilder";
import {MathService} from "./shared/math.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'pvo-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.css']
})
export class MathComponent implements OnInit {

  private routeId;
  public exercise: Exercise;

  constructor(private mathService: MathService, private router: Router, private route: ActivatedRoute) {
    this.routeId = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.exercise = this.mathService.getExerciseFromRouter(this.routeId);
  }

  public next() {

    if (this.exercise.task.inputResolved) {
      this.exercise.next();
    } else {
      this.exercise.check(this.exercise.task);
    }
  }

  /**
   * clear inputTyped field on the current task
   */
  private clear(): void {
    this.exercise.task.inputTyped = null;
  }


  private createNew(): Exercise {
    return ExerciseBuilder
      .operatorType(OperatorType.Minus, OperatorType.Plus)
      .operandRange(0, 10)
      .operandCountRange(2, 2)
      .resultRange(0, 20)
      .taskCount(8)
      .create();
  }

}
