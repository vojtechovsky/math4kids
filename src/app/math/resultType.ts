/**
 * enum type of giving result
 */
export enum ResultType {
  // unknown type
  None = 0,
    // user type in a success result
  Success = 1,
    // user has failed but fixed it in the end
  Fixed = 2,
    // user failed to give a correct result
  Failure = 3,
}
