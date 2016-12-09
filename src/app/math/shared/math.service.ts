import {Injectable} from '@angular/core';

import {OperatorType} from "../operatorType";
import {Exercise} from "../exercise";
import {ExerciseBuilder} from "../exerciseBuilder";

/**
 * Create a mathematics service
 * - translate enum to symbol
 */
@Injectable()
export class MathService {

  private dictionary: {};

  private exerciseDictionary: {};

  constructor() {
    this.dictionary = {};
    this.dictionary[OperatorType.Plus] = "+";
    this.dictionary[OperatorType.Minus] = "-";
    this.dictionary[OperatorType.Multiplication] = ".";
    this.dictionary[OperatorType.Devision] = ":";


    this.exerciseDictionary = {};
    this.exerciseDictionary["r1"] = ExerciseBuilder
      .operatorType(OperatorType.Plus)
      .operandRange(0, 5)
      .operandCountRange(2, 2)
      .resultRange(0, 10)
      .taskCount(8)
      .create();

    this.exerciseDictionary["r2"] = ExerciseBuilder
      .operatorType(OperatorType.Plus)
      .operandRange(0, 10)
      .operandCountRange(2, 2)
      .resultRange(0, 10)
      .taskCount(8)
      .create();

    this.exerciseDictionary["r3"] = ExerciseBuilder
      .operatorType(OperatorType.Plus)
      .operandRange(0, 10)
      .operandCountRange(2, 2)
      .resultRange(0, 10)
      .taskCount(8)
      .create();

    this.exerciseDictionary["r4"] = ExerciseBuilder
      .operatorType(OperatorType.Plus)
      .operandRange(0, 20)
      .operandCountRange(2, 2)
      .resultRange(0, 20)
      .taskCount(8)
      .create();

    this.exerciseDictionary["r5"] = ExerciseBuilder
      .operatorType(OperatorType.Plus)
      .operandRange(1, 50)
      .operandCountRange(2, 2)
      .resultRange(0, 50)
      .taskCount(8)
      .create();

    this.exerciseDictionary["r6"] = ExerciseBuilder
      .operatorType(OperatorType.Plus)
      .operandRange(1, 50)
      .operandCountRange(2, 2)
      .resultRange(0, 50)
      .taskCount(8)
      .create();

    this.exerciseDictionary["r7"] = ExerciseBuilder
      .operatorType(OperatorType.Plus)
      .operandRange(40, 80)
      .operandCountRange(2, 2)
      .resultRange(40, 80)
      .taskCount(8)
      .create();

    this.exerciseDictionary["r8"] = ExerciseBuilder
      .operatorType(OperatorType.Plus)
      .operandRange(0, 100)
      .operandCountRange(2, 2)
      .resultRange(0, 100)
      .taskCount(8)
      .create();

    this.exerciseDictionary["r9"] = ExerciseBuilder
      .operatorType(OperatorType.Minus, OperatorType.Plus)
      .operandRange(0, 100)
      .operandCountRange(2, 2)
      .resultRange(0, 100)
      .taskCount(8)
      .create();

    this.exerciseDictionary["r10"] = ExerciseBuilder
      .operatorType(OperatorType.Minus, OperatorType.Plus)
      .operandRange(50, 100)
      .operandCountRange(2, 2)
      .resultRange(50, 100)
      .taskCount(8)
      .create();

    this.exerciseDictionary["r11"] = ExerciseBuilder
      .operatorType(OperatorType.Minus, OperatorType.Plus)
      .operandRange(90, 120)
      .operandCountRange(2, 2)
      .resultRange(90, 120)
      .taskCount(8)
      .create();

    this.exerciseDictionary["r12"] = ExerciseBuilder
      .operatorType(OperatorType.Minus, OperatorType.Plus)
      .operandRange(0, 200)
      .operandCountRange(2, 2)
      .resultRange(0, 200)
      .taskCount(8)
      .create();
  }

  public getServiceName(): string {
    return "MathService";
  }

  /**
   * it returns the string interpretation of operator type
   * @param operatorType
   * @returns {string}  operator sign
   */
  public getOperatorSymbol(operatorType: OperatorType): string {
    return this.dictionary[operatorType];
  }

  public getExerciseFromRouter(routerKey: string): Exercise {
    return this.exerciseDictionary[routerKey];
  }

}
