import React , {Component, PureComponent} from 'react';
import FormValidator from '../FormValidator';
import PopUp from '../PopUp';

class Formulario extends Component {

    constructor(props){
        super(props);

        this.validador = new FormValidator([
            {
                campo:'nome',
                metodo: 'isEmpty',
                validoQuanto: false,
                mensagem: 'Insira um nome'
            },
            {
                campo:'livro',
                metodo: 'isEmpty',
                validoQuanto: false,
                mensagem: 'Insira um livro'
            },
            {
                campo:'preco',
                metodo: 'isInt',
                args: [{min: 0, max: 9999}],
                validoQuanto: true,
                mensagem: 'Insira um valor válido'
            }
        ]);

        this.stateInicial = {
            nome:'',
            livro:'',
            preco:'',
            valicadao: this.validador.valido()
        }

        this.state = this.stateInicial;

    }

    listeningInput = event => {
        const {name, value} = event.target;

        this.setState({
            [name]: value
        });
    }

    submitFormulario = () => {

        const validacao = this.validador.valida(this.state);

        if(validacao.isValid)
        {
            this.props.Enviar(this.state);
            this.setState(this.stateInicial);
        }
        else{
            const {nome, livro, preco} = validacao;
            const campos = [nome, livro, preco];

            const camposInvalidos = campos.filter(elem => {
                return elem.isInvalid;
            });
            camposInvalidos.forEach(campo => {
                PopUp.exibeMensagem('error', campo.mensage);
            });
        }
    } 

    render(){

        const {nome, livro, preco} = this.state;

        return(
            <form>
                <div className="row">
                    <div className="input-field col s4">
                        <label className="input-field" htmlfor="nome">Nome</label>
                        <input
                            className="validate"
                            id="nome"
                            type="text"
                            name="nome"
                            value={nome}
                            onChange = {this.listeningInput}
                            />
                    </div>

                    <div className="input-field col s4">                    
                        <label className="input-field" htmlfor="livro">Livro</label>
                        <input
                            className="validate"
                            id="livro"
                            type="text"
                            name="livro"
                            value={livro}
                            onChange = {this.listeningInput}
                            />
                    </div>
                    
                    <div className="input-field col s4">   
                        <label className="input-field" htmlfor="preco">Preço</label> 
                        <input
                            className="validate"
                            id="preco"
                            type="text"
                            name="preco"
                            value={preco}
                            onChange = {this.listeningInput}
                            />
                    </div>
                </div>
                <button
                    className="waves-effect waves-light btn indigo lighten-2" 
                    type="button" 
                    onClick={this.submitFormulario}>Salvar
                </button>
            </form>
        )
    }

}

export default Formulario;