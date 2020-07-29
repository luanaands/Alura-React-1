import React, { Component, Fragment } from 'react';
import './App.css'
import Header from './Header.js'
import Table from './Table.js'
import Form from './Formulario.js'

import 'materialize-css/dist/css/materialize.min.css';

class App extends Component {
  state = {
    autores: [
      {
        nome: 'Paulo',
        livro: 'React',
        preco: '1000'
      },
      {
        nome: 'Daniel',
        livro: 'Java',
        preco: '99'
      },
      {
        nome: 'Marcos',
        livro: 'Design',
        preco: '150'
      },
      {
        nome: 'Bruno',
        livro: 'DevOps',
        preco: '100'
      }
    ]
  }


  removeAutor = index => {

    const { autores } = this.state;


    this.setState(
      {
        autores: autores.filter((Atual, posAtual) => {
          return index !== posAtual;
        }),
      }
    );

  }

  listenSubmit = autor => {
    this.setState({autores:[...this.state.autores, autor]})
  }

  render() {

    return (
      <Fragment>
        <Header/>
        <div className="container">  
        <Table  autores={this.state.autores} removeAutor={this.removeAutor} />
        <Form listenSubmit = {this.listenSubmit}/>
        </div>
       
      </Fragment>

    );
  }

}

export default App;
