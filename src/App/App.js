import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Components
import Product from '../product/product';
import WishList from '../wishlist/wishlist'

//Services
import HttpService from '../services/http-service';

const http = new HttpService();

class App extends Component {

    constructor(props){
      super(props);

      this.state= {products:[]};

      //Bind functions
      this.loadData = this.loadData.bind(this);
      this.productList = this.productList.bind(this);

      this.loadData();

      // http.getProducts();
    }

    loadData = () =>{
      var self = this;
      http.getProducts().then(data => {
          // console.log(data);
          self.setState({products: data.Listadoarticulo})
      }, er=> {

      });
    }
    
    // productList = () => {
    //   const list = this.state.products.map((product) => 
    //     <div className = "col-sm-4" key={product._id}>
    //       <Product product={product}/>
    //     </div>
    //   );
    productList = () => {
        const list = this.state.products.map((articulo) => 
        <div className = "col-sm-4" key={articulo.IdArticulo}>
          <Product articulo={articulo}/>
        </div>
      );
//  title={product.title} price={product.price} imgUrl={product.imgUrl} <Product aqui dentro va/>
      return (list);
    }
  render() {
      return (
        
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo"  />
            <h1 className="App-title">Web Billing System</h1>
          </div>
            <div className = "container-fluid App-main">
                <div className="row">
                  <div className="col-sm-8">
                      <div className="row">
                        {this.productList()}
                      </div>
                      
                  </div>
                  <div className="col-sm-4">
                      <WishList />
                  </div>
                </div>
                
                {/* <div className="row">
                  <div className="col-sm-4">
                      <WishList />
                  </div>
                </div> */}
            </div>
        </div>
      );
  }
}

//* */
// <Product className="col-sm-4" price="4.23" title="Mac iOS" 
//                   imgUrl="https://i.pinimg.com/originals/1e/3d/8d/1e3d8d71079a006c018526ccabbc6505.png"/>
//                   <Product className="col-sm-4"  price="4.23" title="Mac iOS" 
//                   imgUrl="https://i.pinimg.com/originals/1e/3d/8d/1e3d8d71079a006c018526ccabbc6505.png"/>
//                   <Product className="col-sm-4"  price="4.23" title="Mac iOS" 
//                   imgUrl="https://i.pinimg.com/originals/1e/3d/8d/1e3d8d71079a006c018526ccabbc6505.png"/>
export default App;
