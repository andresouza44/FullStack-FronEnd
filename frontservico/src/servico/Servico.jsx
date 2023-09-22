
import React, { useEffect, useState } from 'react';
import '../App.css';
import axios from 'axios';

 function Servico() {
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


 const onInputChange = (e) => {
   setServico({...servico, [e.target.name]: e.target.value})

 };

 const onSubmit =  async (event) => {
   event.preventDefault();
   const result = await axios.post("http://localhost:8080/servico",servico)
   
 }

return (
   <div className="container">
    <h1>Cadastro de Serviços</h1>
    <form  onSubmit={onSubmit}>
      <div className='col-6'>
        <div>
          <label className='form-label'>Nome do Cliente: </label>
          <input  value={servico.nomeCliente} name="nomeCliente" type="text" className='form-control' onChange={onInputChange}/>
        </div>
        <div>
          <label className='form-label'>Data Início: </label>
          <input value = {servico.dataInicio}name="dataInicio" type="date" className='form-control' onChange={(e) => onInputChange(e)}/>
        </div>
        <div>
          <label className='form-label'>Data Término: </label>
          <input value = {servico.dataTermino}name="dataTermino" type="date" className='form-control' onChange={(e) => onInputChange(e)}/>
        </div>
        <div>
          <label className='form-label'>Descrição do Servico: </label>
          <input value = {servico.descricao} name="descricao" type="text" className='form-control'  onChange={(e) => onInputChange(e)}/>
        </div>
        <div>
          <label className='form-label'>Valor do Serviço: </label>
          <input value = {servico.valorServico} name="valorServico" type="number" className='form-control'  onChange={(e) => onInputChange(e)}/>
        </div>
        <div>
          <label className='form-label'>Valor Pago: </label>
          <input value={servico.valorPago} name="valorPago" type="number" className='form-control' onChange={(e) => onInputChange(e)}/>
        </div>
        <div>
          <label className='form-label'>Data do Pagamento: </label>
          <input value={servico.dataPagamento} name="dataPagamento" type="date" className='form-control' onChange={(e) => onInputChange(e)}/>
        </div>

      <br/>
        <input class="btn btn-primary" type="submit" value="Cadastrar" />
      </div>
    </form>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nome</th>
      <th scope="col">Descrição</th>
      <th scope="col">Valor</th>
      <th scope="col">Status</th>
      <th scope="col">Opções</th>
    </tr>
  </thead>
  <tbody> {servicos.map((serv, index) => (
    <tr>
      <th scope="row"key ={index}>{index+1} </th>
      <td>{serv.nomeCliente}</td>   
      <td>{serv.descricao}</td>
      <td>{serv.valorServico}</td>
      <td>{serv.status}</td>
      
    </tr>
  ))}
  </tbody>
</table>

   </div>
   

  );
}

export default Servico;
