import { useState } from "react"
import ProductList from './components/ProductList';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from './components/About';
import Contact from './components/Contact';

function App() {
  const [products, setProducts] = useState([
    {id: 1, title: 'Product 1', price: 899},
    {id: 2, title: 'Product 2', price: 982},
    {id: 3, title: 'Product 3', price: 322},
    {id: 4, title: 'Product 4', price: 763},
    {id: 5, title: 'Product 5', price: 389}
  ]);
  
  const deleteProduct = (productId) => {
    const newProduct = products.filter(product => product.id !== productId);
    setProducts(newProduct);
  }

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <ProductList products={ products } deleteProduct={ deleteProduct } />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
 
export default App;