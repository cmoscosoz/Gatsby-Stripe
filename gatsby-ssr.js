const React = require("react")
const { CartProvider } = require("./src/context")
const { GlogbalStyles } = require("./src/styles")
const Layout = require("./src/components/layout").default

exports.wrapRootElement = ({ element }) => (
  <CartProvider>
    <GlogbalStyles />
    <Layout>{element}</Layout>
  </CartProvider>
)
