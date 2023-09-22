
import React, { useEffect, useState } from 'react';
import '../App.css';
export default Servico 

const [servico, setServico] = useState({
    nomeCliente:'',
    dataInicio:'', 
    dataTermino:'',
    descServico:'',
    valorServico:'',
    valorPago:'',
    dataPagamento:''})

const [servicos, setServicos]= useState([])

const onInputChange = (e) => {
  setServico({...servico, [e.target.name]: e.target.value})
}
function Servico() {
  return (
   <div className="container">
    <h1>Cadastro de Serviços</h1>
    <form>
      <div className='col-6'>
        <div>
          <label className='form-label'>Nome do Cliente: </label>
          <input  value={servico.nomeCliente} name="nomeCliente" type="text" className='form-control' onChange={(e) => onInputChange(e)}/>
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
          <input value = {servico.descServico} name="descServico" type="text" className='form-control'  onChange={(e) => onInputChange(e)}/>
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
      </div>
    </form>
   </div>
  );
}


