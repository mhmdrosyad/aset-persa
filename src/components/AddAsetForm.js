import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { Form, Button, Alert } from 'react-bootstrap';

const InfoWrapper = (props) => {
  const { status } = props;

  if(status !== null){
    if(status === false) {
      return(
        <Alert variant="danger">Data Gagal Ditambahkan</Alert>
      );
    }
    return (<Alert variant="success">Data Berhasil Ditambahkan</Alert>);
  }
  return <></>;
};

const AddAsetForm = () => {
  const [state, setState] = useState({ nama: '', stock: 0});
  const [isSuccess, setIsSuccess] = useState(null);
  const navigate = useNavigate();
  const handleNameChange = (e) => {
    setState({ ...state, nama: e.target.value })
  }

  const handleStockChange = (e) => {
    setState({ ...state, stock: e.target.value })
  }

  const handleSubmit = (e) => {
    const options = {
      method: 'POST',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify(state)
    };

    async function fetchData() {
      const response = await fetch('http://localhost:5000/aset', options);
      if(response.ok) {
        setIsSuccess(true);
        setTimeout(() => navigate('/') , 3000) ;
      } else{
        setIsSuccess(false)
      }
    }

    fetchData();
    e.preventDefault();
  }

  const { nama, stock } = state;

  return (
    <>
     <InfoWrapper status={isSuccess} />
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="namaBarang">
        <Form.Label>Nama barang</Form.Label>
        <Form.Control type="text" name="nama" value={nama} onChange={handleNameChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="namaBarang">
        <Form.Label>Stock</Form.Label>
        <Form.Control type="number" name="stock" value={stock} onChange={handleStockChange}/>
      </Form.Group>
      <Button variant="warning" type="submit">Tambah Aset</Button>
      </Form>
    </>
  );
};

export default AddAsetForm;