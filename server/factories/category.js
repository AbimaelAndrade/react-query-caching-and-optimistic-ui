import { Factory } from "miragejs";
import { faker } from "@faker-js/faker";

export default {
  category: Factory.extend({
    name() {
      return faker.commerce.department();
    },
  }),
};
