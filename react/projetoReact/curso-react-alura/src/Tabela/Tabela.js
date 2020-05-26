import React, { Component } from 'react';

const TabelaHead = () => {
    return (
        <thead>
            <tr>
                <th>Autores</th>
                <th>Livros</th>
                <th>Preços</th>
                <th>Remover</th>
            </tr>
        </thead>
    );
}

const TabelaBody = props => {

    const linhas = props.autores.map((linha, index) => {
        return (
            <tr key={index}>
                <td>{linha.nome}</td>
                <td>{linha.livro}</td>
                <td>R$ {linha.preco}</td>
                <td><button
                        className="waves-effect waves-light btn indigo lighten-2" 
                        onClick = { () => props.removeAutor(index) }>
                        Remover
                    </button></td>
            </tr>
        );
    });

    return (
        <tbody>
            {linhas}
        </tbody>
    );
}

class Tabela extends Component{

    render(){
        const { author, removeAuthor } = this.props;

        return(
            <table className="centered highlight">
                <TabelaHead />
                <TabelaBody autores={author} removeAutor={removeAuthor} />      
            </table>
        );
    }
}

export default Tabela;