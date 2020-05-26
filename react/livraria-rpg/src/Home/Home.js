import React, { Component } from 'react';

const Cabecalho = () => {
    return(
        <tbody>
            <tr>
                <th>Titulo</th>
                <th>Sistema</th>
                <th>Versãoes em</th>
                <th>Valores</th>
                <th>Capa</th>
            </tr>
        </tbody>
    );
}

const Corpo = () => {
    return(
        <tbody>
            <tr>
                <td>Vampiro a mascara</td>
                <td>Mundo das trevas</td>
                <td>EN ES PT AL</td>
                <td>R$ 45.90</td>
                <td>IMG GENERICA</td>
            </tr>
            <tr>
                <td>Gurps</td>
                <td>Gurps</td>
                <td>EN ES PT AL</td>
                <td>R$ 29.90</td>
                <td>IMG GENERICA</td>
            </tr>
            <tr>
                <td>Advanced Dungeons and Dragons</td>
                <td>D&D</td>
                <td>EN ES PT AL</td>
                <td>R$ 45.90</td>
                <td>IMG GENERICA</td>
            </tr>
        </tbody>
    );
}

class Home extends Component{
    render()
    {
        return(
            <table>
                <Cabecalho/>
                <Corpo/>
            </table>
        );
    }
}

export default Home;