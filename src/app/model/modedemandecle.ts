import {User} from "./user";
import {ProductService} from "./product-service";

export class Modedemandecle {
  constructor(public nbreposte?: number,
              public dureecle?: number,
              public id_user?: User,
              public id_product? : ProductService,
              public product_name?: ProductService
              ) {
  }

}
