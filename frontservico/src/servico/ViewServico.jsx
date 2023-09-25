
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

export default function ViewServico() {
  const [servico, setServico] = useState({
      nomeCliente:"",
      dataInicio:"",
      dataTermino:"",
      descricao:"",
      valorServico:"",
      valorPago:"",
      dataPagamento:"",  
     
 });
 const [servicos, setServicos]= useState([]);

 useEffect (()=> {
  loadServicos();
}, []);

const loadServicos = async () => {
  const result = await axios.get("http://localhost:8080/servico");
  setServicos(result.data);
  
}
const listaPendente = async() =>{
  const result = await axios.get("http://localhost:8080/servico/pendente");
  setServicos(result.data)
}
const listaCancelados = async () =>{
  const result = await axios.get("http://localhost:8080/servico/cancelado");
  setServicos(result.data)


}


 const onInputChange = (e) => {
   setServico({...servico, [e.target.name]: e.target.value})

 };

 const onSubmit =  async (event) => {
   event.preventDefault();
   await axios.post("http://localhost:8080/servico",servico)
   loadServicos()
   
 }

 const cancelarServico = async (id) => {
  await axios.put(`http://localhost:8080/servico/cancelar/${id}`)
  loadServicos()
  console.log(servico.data)

 }

 const deleteServico = async (id) => {
  await axios.delete(`http://localhost:8080/servico/${id}`)
  loadServicos()
}

return (
   <div className="container">
    <h1 className= "text-center m-4">Listagem de Serviços</h1>
    
    <button type="button" class="btn btn-success btn-sm mx-1" onClick={() =>loadServicos()}>Listar Todos</button>
    <button type="button" class="btn btn-success btn-sm mx-1"onClick={() => listaPendente()}>Pagamento Pendente</button>
    <button type="button" class="btn btn-success btn-sm mx-1" onClick={() => listaCancelados()}>Serviços Cancelados</button>
    <Link to ="addservico"> Adicionar </Link>;
    
   
    <br/><br/>
    <table class="table">
  <thead>
    <tr class="table-secondary">
      <th scope="col">#</th>
      <th scope="col">Nome</th>
      <th scope="col">Descrição</th>
      <th scope="col">Valor</th>
      <th scope="col">Status</th>
      <th scope="col">Opções</th>
    </tr>
  </thead>
  <tbody > {servicos.map((serv, index) => (
    <tr>
      <th scope="row"key ={index}>{index+1} </th>
      <td>{serv.nomeCliente}</td>  
      <td>{serv.descricao}</td>
      <td>{serv.valorServico}</td>
      <td>{serv.status}</td>
      
      {serv.status !=="CANCELADO"  &&
      <button className="btn btn-primary btn-sm mx-1 table-primary" onClick={() => setServico(serv)}>Alterar</button> }
     {serv.status !=="CANCELADO"  &&
      <button className="btn btn-danger btn-sm mx-1 table-danger" onClick={() => deleteServico(serv.id)}>Excluir</button> }
      <button className="btn btn-warning btn-sm mx-1 table-warning" onClick={()=>cancelarServico(serv.id)}>Cancelar</button>
    
      
    </tr>
  ))}
  </tbody>
</table>

   </div>
   

  );
}


