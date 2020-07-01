import {User} from "./user";
import {ProductService} from "./product-service";

export class Modelmanegekey {
  constructor(public activation_key: number,
              public user_name?: User,
              public key_activation?: String,
              public product_name?: ProductService,
              public nbrePoste?: number,
              public nbreinstanceOn?: number  ) {
  }

}
