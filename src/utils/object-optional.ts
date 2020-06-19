import { Omit } from "typelevel-ts";

export type ObjectOptional<O extends Object, K extends keyof O> = Omit<O, K> &
  Partial<Pick<O, K>>;
