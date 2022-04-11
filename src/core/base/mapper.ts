export abstract class Mapper<I, O> {
  abstract mapTo(param: O): I;
}
