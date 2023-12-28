import { Type } from "@angular/core";

export interface Widget {
  id: number;
  name: string;
  load: () => Promise<Type<any>>;
}
