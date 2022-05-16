import { Server, RestSerializer } from "miragejs";

import factories from "./factories";
import routes from "./routes";
import models from "./models";
import seeds from "./seeds";

const config = (environment) => {
  const config = {
    timing: 2000,
    namespace: "api",
    environment,
    factories,
    models,
    routes,
    seeds,
    serializers: {
      product: RestSerializer.extend({
        include: ["category"],
        embed: true,
      }),
      category: RestSerializer.extend({
        include: ["products"],
        embed: true,
      }),
    },
  };

  return config;
};

export default function makeServer({ environment = "development" } = {}) {
  return new Server(config(environment));
}
