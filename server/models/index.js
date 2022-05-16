import { Model, hasMany, belongsTo } from "miragejs";

export default {
  category: Model.extend({
    products: hasMany(),
  }),
  product: Model.extend({
    category: belongsTo(),
  }),
};
