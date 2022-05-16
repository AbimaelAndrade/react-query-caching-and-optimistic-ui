const productsSeeder = (server) => {
  server.createList("product", 10);
};

export default function seeds(server) {
  server.loadFixtures();
  productsSeeder(server);
}
