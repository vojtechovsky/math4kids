import {OperatorType} from "./operatorType";
import {Exercise} from "./exercise";

/**
 * ExerciseCommand - collects all requirements and "creates" a new Exercise object
 */
export class ExerciseCommand {
  private operandMin: number = 0;
  private operandMax: number = 10;
  private operandsCountMin: number = 2;
  private operandsCountMax: number = 2;
  private resultMin: number = 0;
  private resultMax: number = 10;
  private tasksCount: number = 10;

  constructor(private types: OperatorType[]) {
  }

  static getName(): string {
    return "title";
  }

  operandCountRange(min: number, max: number): ExerciseCommand {
    this.operandsCountMin = min;
    this.operandsCountMax = max;
    return this;
  }


  operandRange(min: number, max: number): ExerciseCommand {
    this.operandMin = min;
    this.operandMax = max;
    return this;
  }

  resultRange(min: number, max: number): ExerciseCommand {
    this.resultMin = min;
    this.resultMax = max;
    return this;
  }

  taskCount(testCount: number): ExerciseCommand {
    this.tasksCount = testCount;
    return this;
  }

  create(): Exercise {
    return new Exercise(
      this.types, this.operandMin, this.operandMax,
      this.operandsCountMin, this.operandsCountMax,
      this.tasksCount,
      this.resultMin, this.resultMax);
  }
}

/**
 * Helper class to create an exercise from static class
 */
export class ExerciseBuilder {
  static operatorType(...types: OperatorType[]): ExerciseCommand {
    return new ExerciseCommand(types);
  }
}
