import products from '../myStore/products'

export default async () => {
  // const { $content } = require("@nuxt/content");
  // const files = await $content({ deep: true }).only(["path"]).fetch();

  let routes = []
  const routePrefix = '/products/'
  routes = new Promise(resolve => {
    let routes = []
    products.products.forEach(product => routes.push(routePrefix + product.slug))
    resolve(routes => routes)
  })



  // routes = files.map((file) => (file.path === "/index" ? "/" : file.path));
  console.log(routes)
  return routes
};
