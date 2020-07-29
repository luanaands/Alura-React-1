import React, {Component} from 'react';



class Formulario extends Component {

    constructor(props){
        super(props);
   
        this.stateInicial = {
            nome: '',
            livro: '',
            preco:''
        }
   
        this.state = this.stateInicial;
   
   }
   
   listenState = event => {

    const {name, value} = event.target;

    this.setState({
        [name]: value,
    }
    )

   }

   submitFormulario = () => {
    this.props.listenSubmit(this.state);
    this.setState(this.stateInicial);
   }


render(){

const {name, livro, preco} = this.state;

return(
<form>
    <div className="row">
 <div className="input-field col s4">
 <label className="input-field" htmlFor="nome">Nome</label>
    <input
     className="validate"
        id="nome"
        type="text"
        name="nome"
        value={name} onChange={this.listenState}/>
 </div>       

<div className="input-field col s4">
<label className="input-field" htmlFor="livro">Livro</label>
    <input
     className="validate"
        id="livro"
        type="text"
        name="livro"
        value={livro} onChange={this.listenState}/>
</div>
   

<div className="input-field col s4">
<label className="input-field" htmlFor="preco">Preço</label>
    <input
    className="validate"
        id="preco"
        type="text"
        name="preco"
        value={preco} onChange={this.listenState}/>
</div>
   

</div>
    <button className="waves-effect waves-light btn indigo lighten-1 mb-10 " type="button" onClick={this.submitFormulario}>Salvar </button>
</form>
);

}


}

export default Formulario;