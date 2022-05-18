import { Factory } from "miragejs";
import { faker } from "@faker-js/faker";
import getImage from "../fixtures/imagens";

export default {
  product: Factory.extend({
    title() {
      return faker.commerce.productName();
    },
    description() {
      return faker.commerce.productDescription();
    },
    price() {
      return faker.commerce.price();
    },
    image() {
      return getImage();
    },
    afterCreate(product, server) {
      product.update({
        category: server.create("category"),
      });
    },
  }),
};
