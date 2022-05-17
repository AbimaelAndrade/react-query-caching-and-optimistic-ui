import { Response } from "miragejs";

export default function routes() {
  this.namespace = "api";
  this.timing = 2000;

  this.resource("categories");
  this.resource("products");

  this.get("products", function (schema, request) {
    const { page = 1, take = 10 } = request.queryParams;
    const skip = (+page - 1) * +take;

    const allData = schema.products.all();

    const data = allData.slice(skip, skip + +take);
    const total = allData.length;
    const currentPage = +page;
    const lastPage = Math.ceil(total / +take);
    const hasNextPage = currentPage < lastPage;
    const hasPreviousPage = currentPage > 1;

    if (+page > lastPage) {
      return new Response(
        400,
        { "Content-Type": "application/json" },
        { errors: [`Page ${page} does not exist.`] }
      );
    }

    return {
      data: {
        content: this.serialize(data)?.products,
        total,
        perPage: +take,
        currentPage,
        lastPage,
        hasNextPage,
        hasPreviousPage,
      },
    };
  });

  this.get("products/:id", (schema, request) => {
    const { id } = request.params;

    return schema.products.find(id);
  });

  this.get("categories/:id", (schema, request) => {
    const { id } = request.params;

    return schema.categories.find(id);
  });
}
