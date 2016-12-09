import {ResultType} from "./resultType";
import {OperatorType} from "./operatorType";

/**
 * it implements the basic math task to calculate
 */
export class Task {
  operatorTypes: OperatorType[];
  operands: number[];
  result: number;
  inputResultType: ResultType;
  inputTyped: number;
  inputFeedback: string;
  inputResolved: boolean;
  numberOfTrial: number;
  level: number;
  subLevel: number;
  duration: number;
  startDate: Date;
  endDate: Date;
  date: Date;
}
