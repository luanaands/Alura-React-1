import React, {Component} from 'react';

const TableHead = () => {
    return(
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


const TableBody = props => {
    const linhas = props.autores.map((linhas, index) =>{
        return(
                <tr key={index}>
                    <td>{linhas.nome}</td>
                    <td>{linhas.livro}</td>
                    <td>{linhas.preco}</td>
                    <td><button className="waves-effect waves-light btn indigo lighten-1" onClick = {() => {props.removeAutor(index) }}>Remover</button></td>
                </tr>
         );
    });

    return(
        <tbody>
            {linhas}
        </tbody>
    );
}

class Table extends Component {
   render(){
          const {autores, removeAutor} = this.props;
        return(
        <table className="highlight centered">
            <TableHead/>
            <TableBody autores = {autores}  removeAutor = {removeAutor}/>
        </table>);
   }
}

export default Table;