import React from "react";
import { Header } from "./components/header/Header";
import Subheader from "./components/subheader/Subheader";
import Filters from "./components/filters/Filters";
import ProductsCard from "./components/ProductsCard/ProductsCard";
import ProductsCart from './components/Cart/ProductsCart';
import { Footer } from "./components/footer/Footer";
import styled from "styled-components";
// import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import axios from "axios";

// Ícone do Carrinho
const Cart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 80px;
  height: 80px;
  background-color: white;
  border-radius: 50%;
  box-shadow: 0 0 5px #00000059;
  cursor: pointer;
  transition: 0.5s;
  > img {
    width: 50%;
    height: 45%;
  } 
 :hover {
    box-shadow: 0 0 20px blue;
 }
`

export class HomePage extends React.Component {
  
  state = {
    produtos: [],
    produtosFiltrado: [],
    valorMax: Infinity,
    valorMin: 0,
    cart: [],
    isCartVisible: false,
    currentSearchValue: '',
    ordenacao: "",
  };

  informacoesCard = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/fourUsedTwo/products"
      )
      .then((res) => {
        this.setState({ produtos: res.data.products });
        this.setState({ produtosFiltrado: res.data.products });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount = () => {

    this.informacoesCard();  
  };

  componentDidUpdate = () => {
    //  this.informacoesCard()
  };

  // Pegar os produtos filtrados
  handleFilterMax = (e) => {
    const valorMax = e.target.value;
    this.setState({
      valorMax: valorMax,
    });
  };


  handleFilterMin = (e) =>{
    const valorMinino = e.target.value

    this.setState({
      valorMin: valorMinino,
    });
  };

  filtraProdutos = () => {
    const listaProdutos = this.state.produtosFiltrado.filter((produto) =>{
      return this.state.valorMin > 0 ? produto.price > this.state.valorMin : produto    
    })
    
    .filter((produto) => {
      return this.state.valorMax < Infinity ? produto.price < this.state.valorMax : produto
    })


    return(
      this.setState({
        produtosFiltrado: listaProdutos,
        valorMax: Infinity,
        valorMin: 0
      })
    )
  }

  onChangeOrder = (e) => {
    const ordernar = e.target.value;
    const arrayProdutos = this.state.produtosFiltrado;
    switch (ordernar) {
      case "nome":
        arrayProdutos.sort((a, b) => {
          return a.name.toLowerCase() < b.name.toLowerCase()
            ? -1
            : a.name.toLowerCase() > b.name.toLowerCase()
            ? 1
            : 0;
        })
        this.setState({
          produtosFiltrado: arrayProdutos
        })
        break
       
      case "categoria":
        arrayProdutos.sort((a, b) => {
          return a.category < b.category ? -1 : a.category > b.category ? 1 : 0;
        })
        this.setState({
          produtosFiltrado: arrayProdutos
        })
        break

      case "preco":
        arrayProdutos.sort((a, b) => {
          return a.price < b.price ? -1 : a.price > b.price ? 1 : 0;
        });
        this.setState({
          produtosFiltrado: arrayProdutos
        })
        break

      default:
        this.setState({
          produtosFiltrado: this.state.produtos,
        });
    }
  };


  pegaCategoria = (e) => {
    const categoria = e;
    const filterCategoria = this.state.produtos.filter((produto) => {
      if (categoria === "home") {
        return this.informacoesCard();
      } else {
        return produto.category === categoria;
      }
    });
    this.setState({
      produtosFiltrado: filterCategoria,
    });
  };

  //Função de adicionar produtos ao carrinho 
    addProductToCart = (product) => {
      const newCart = [...this.state.cart]
      const productIndexInCart = this.state.cart.findIndex((item) => item.product.id === product.id)
  
      if (productIndexInCart > -1) {
        newCart[productIndexInCart].quantity += 1
      } else {
        newCart.push({ product: product, quantity: 1 })
      }
      this.setState({
        cart: newCart,
      })
    }
  // Remove produtos do carrinho
  removeProductFromCart = (product) => {
    const newCart = [...this.state.cart]
    const productIndexToRemove = this.state.cart.findIndex((item) => item.product.id === product.id)

    newCart.splice(productIndexToRemove, 1)

    this.setState({
      cart: newCart,
    })
  }
  // Função para mostrar o campo do carrinho
    toggleCartVisibility = () => {
      this.setState({
        isCartVisible: !this.state.isCartVisible,
      })
    }

  render() {
    return (
      <div className="App">
        
        <Header
          goHome={this.props.goHome}
          handleHomePage={this.props.handleHomePage}
        />
        
        <Subheader pegaCategoria={this.pegaCategoria} />
        
        <Filters 
        filtraProdutos={this.filtraProdutos} 
        handleFilterMax={this.handleFilterMax} 
        handleFilterMin={this.handleFilterMin} 
        ordenacao={this.onChangeOrder}
        />
        
        {this.state.isCartVisible && (
          <ProductsCart
            cartContent={this.state.cart}
            removeProductFromCart={this.removeProductFromCart}
          />
        )}
        <Cart onClick={this.toggleCartVisibility}>
          <img src='https://www.flaticon.com/svg/vstatic/svg/1170/1170678.svg?token=exp=1611336500~hmac=be6ab5d66782ec832d906f33dd924869'alt="cart-icon"/>
          </Cart>
        
        <ProductsCard 
          produtos={this.state.produtosFiltrado} 
        />
        
        <Footer />
      </div>
    );
  }
}
