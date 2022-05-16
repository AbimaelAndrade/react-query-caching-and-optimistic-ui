export default function routes() {
  this.namespace = "api";
  this.timing = 2000;

  this.resource("categories");
  this.resource("products");

  this.get("products/:id", (schema, request) => {
    const { id } = request.params;

    return schema.products.find(id);
  });

  this.get("categories/:id", (schema, request) => {
    const { id } = request.params;

    return schema.categories.find(id);
  });
}
