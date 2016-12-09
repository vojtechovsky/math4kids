//--import _ from 'lodash';
import * as _ from 'lodash';

import {OperatorType} from "./operatorType";
import {Task} from "./task";
import {ResultType} from "./resultType";


/**
 * Base class for exercise
 *
 */
export class Exercise {

  constructor(private operatorTypes: OperatorType[] = [OperatorType.Plus, OperatorType.Minus],
              private operandMin: number = 0,
              private operandMax: number = 10,
              private operandsCountMin: number = 2,
              private operandsCountMax: number = 2,
              private taskCount: number = 5,
              private resultMin: number = 0,
              private resultMax: number = 10) {
    this.isCompleted = false;
    this.tasks = [];
    this.generateTasks();
  }


  public tasks: Task[];
  public task: Task;


  /**
   * private setter for the task
   * @param value
   * @returns {}
   */
  private setTask(value: Task) {
    this.task = value;
    this.task.startDate = new Date();
  }

  public taskActiveIndex = 0;

  /**
   * it signals the exercise is completed
   */
  public isCompleted: boolean;

  /**
   * generate new tasks for the repetition
   * @returns {}
   */
  private generateTasks() {
    //clear the array;
    this.tasks.length = 0;

    //reset active record;
    this.taskActiveIndex = 0;
    this.isCompleted = false;

    for (let i = 0; i < this.taskCount; i++) {
      this.tasks.push(this.createNewRandomTask());
    }

    this.setTask(this.tasks[this.taskActiveIndex]);
  }

  /**
   * public only for tests
   * create a new task and return it
   * @returns {}
   */
  public createNewRandomTask(): Task {
    let res = new Task();
    res.operands = [];
    res.operatorTypes = [];
    res.inputResultType = ResultType.None;
    res.inputTyped = null;
    res.inputResolved = false;
    res.numberOfTrial = 0;
    //startDate= new Date(0);
    //endDate= new Date(0);
    //duration= new Date(0);
    //date= new Date()

    let operandsCount = _.random(this.operandsCountMin, this.operandsCountMax);
    for (let i = 0; i < operandsCount; i++) {
      res.operands.push(_.random(this.operandMin, this.operandMax));
      res.operatorTypes.push(this.operatorTypes[_.random(this.operatorTypes.length - 1)]);
    }

    //check minus operator and swap if the result is negative
    if ((res.operatorTypes[0] === 1) && (res.operands[1] > res.operands[0])) {
      let num1 = res.operands[0];
      res.operands[0] = res.operands[1];
      res.operands[1] = num1;
    }

    res.result = Exercise.getResult(res.operatorTypes[0], res.operands);
    return res;
  }

  /**
   * check given _task.
   * @param task
   * @returns {boolean} => return true if the exercise if finished
   */
  public check(task: Task): void {
    task.inputFeedback = "";

    if (task.inputTyped === task.result) {
      task.inputFeedback = "OK";
      task.inputResolved = true;
      task.inputResultType = (task.numberOfTrial === 0) ? ResultType.Success : ResultType.Fixed;
    } else {
      task.numberOfTrial = task.numberOfTrial + 1;
      task.inputFeedback = "wrong, try again!";
      task.inputResultType = ResultType.Failure;
      task.inputResolved = (task.numberOfTrial > 1);
    }

    if ((task.inputResolved) && (this.isLastTask())) {
      this.isCompleted = true;
    }
  }

  /**
   * it moves to the next _task in the row
   * or stays at the last
   *
   * @returns {number} index of the active _task
   */
  public next(): number {

    this.check(this.task);

    //check the time
    this.task.endDate = new Date();
    Exercise.setDuration(this.task);

    this.isCompleted = this.isLastTask();
    this.task.inputResolved = true;

    if (!this.isCompleted) {
      this.setTask(this.tasks[++this.taskActiveIndex]);
    }
    return this.taskActiveIndex;
  }

  /*
   * Returns a random integer between min (inclusive) and max (inclusive)
   * Using Math.round() will give you a non-uniform distribution!
   */
  //private getRandomInt(min, max) {
  //    return Math.floor(Math.random() * (max - min + 1)) + min;
  //}

  /**
   * calculate given mathematic operation
   * @param operandType
   * @param numbers
   * @returns {}
   */
  public static getResult(operandType: OperatorType, numbers: number[]): number {
    switch (operandType) {
      case OperatorType.Minus:
        return numbers[0] - numbers[1];
      case OperatorType.Plus:
        return numbers[0] + numbers[1];
      case OperatorType.Multiplication:
        return numbers[0] * numbers[1];
      default:
        return numbers[0] % numbers[1];
    }
  }

  private static setDuration(task: Task) {
    task.duration = Math.min(60, Math.floor((task.endDate.valueOf() - task.startDate.valueOf()) / 1000));
  }

  /**
   *
   * @returns {}
   */
  isLastTask(): boolean {
    return (this.taskActiveIndex === this.taskCount - 1);
  }
}
