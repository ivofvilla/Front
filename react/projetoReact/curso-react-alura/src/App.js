import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Tabela from './Tabela/Tabela';
import Form from './Formulario/Formulario';
import Cabecalho from './Cabecalho/Header';
import './App.css'
import PopUp from './PopUp'

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
      },
      {
        nome: 'Nico',
        livro: 'Python',
        preco: '900'
      }
    ]
  };
 
  removeAutor = index => {

    const { autores } = this.state;  

    this.setState({
      autores: autores.filter((autor, posAtual) => {
        return posAtual !== index;
      }),
    });

    PopUp.exibeMensage("success", "Autor removido com sucesso");

  };

  listeningSubmit = autor =>  {
    this.setState({
      autores:[...this.state.autores, autor]
    });
    PopUp.exibeMensage("success", "Autor adicionado com sucesso!");
  }

  render(){     
    return (
      <Fragment>
        <Cabecalho />
        <div className="container mb-10">
          <Tabela className="centered highlight" author={this.state.autores} removeAuthor={this.removeAutor}/>
          <Form Enviar={this.listeningSubmit}/>
        </div>
      </Fragment>
    );  
  }
}

export default App;
