import React, { Component } from 'react';

const TableHead = () => {
  return (
    <thead>
      <tr>
        <th>Autores</th>
        <th>Livros</th>
        <th>preco</th>
        <th>Remover</th>
      </tr>
    </thead>
  );
}

const TableBody = props => {
  const lines = props.autores.map((line, index) => { // Iterear os elementos na lista
    return (
      <tr key={index}>
        <td>{line.nome}</td>
        <td>{line.livro}</td>
        <td>{line.preco}</td>
        <td><button onClick = {() => {props.removerAutor(index)}} className="waves-effect waves-light btn-small" >Remover</button></td>
      </tr>
    );
  });

  return (
    <tbody>
      {lines}
    </tbody>
  );
}

class Tabela extends Component {
  render() {
    
    const {autores, removerAutor} = this.props;
    
    return (
       <table className="centered striped">
         <TableHead></TableHead>
         <TableBody autores = {autores} removerAutor = {removerAutor} ></TableBody>
       </table>
    );
  }
}

export default Tabela;