import React from "react";
import { Header } from "./components/header/Header";
import Subheader from "./components/subheader/Subheader";
import Filters from "./components/filters/Filters";
import ProductsCard from "./components/ProductsCard/ProductsCard";
import { Footer } from "./components/footer/Footer";
import axios from "axios";

export class HomePage extends React.Component {

  state = {
    produtos: [],
    produtosFiltrado: [],
    valorMax: Infinity,
    valorMin: 0,
    nomeBusca: "",
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

  // Pegar os produtos filtrados
  handleFilterMax = (e) => {
    const valorMax = e.target.value;
    this.setState({
      valorMax: valorMax,
    });
  };

  handleFilterMin = (e) => {
    const valorMinino = e.target.value
    this.setState({
      valorMin: valorMinino,
    });
  };

  handleBusca = (e) => {
    const buscador = e.target.value
    this.setState({
      nomeBusca: buscador,
    });
    console.log(buscador)
  };
  
  //Filtra os Produtos por Valor Máximo e Minimo
  filtraProdutos = () => {
    const listaProdutos = this.state.produtos.filter((produto) =>{
      return this.state.valorMin > 0 ? produto.price >= this.state.valorMin : produto    
    })
    .filter((produto) => {
      return this.state.valorMax < Infinity ? produto.price <= this.state.valorMax : produto
    })
    .filter((produto) => {
      const produtoNome = produto.name.toLowerCase()
      return produtoNome.indexOf(this.state.nomeBusca.toLowerCase()) > -1
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

  render() {
    return (
      <div className="App">
        <Header
          goHome={this.props.goHome}
          handleHomePage={this.props.handleHomePage}
        />
        <Subheader pegaCategoria={this.pegaCategoria} />
        <Filters
          ordenacao={this.onChangeOrder}
          filtraProdutos={this.filtraProdutos}
          handleFilterMax={this.handleFilterMax}
          handleFilterMin={this.handleFilterMin}
          handleBusca={this.handleBusca}
        />
        <ProductsCard 
          produtos={this.state.produtosFiltrado} 
        />
        <Footer />
      </div>
    );
  }
}
