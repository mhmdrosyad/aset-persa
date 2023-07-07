import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Form, Button, Alert } from 'react-bootstrap';

const InfoWrapper = (props) => {
  const { status } = props;

  if(status !== null){
    if(status === false) {
      return(
        <Alert variant="danger">Data Gagal Diupdate</Alert>
      );
    }
    return (<Alert variant="success">Data Berhasil Diupdate</Alert>);
  }
  return <></>;
};

const EditAsetForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [allAsets, setAllAsets] = useState(null);
  const [currentAset, setCurrentAset] = useState({ nama: '', stock: 0 });
  const [isSuccess, setIsSuccess] = useState(null);

  useEffect(() => {
    const asetId = location.pathname.replace('/edit/', '');

    async function fetchData(){
      const response = await fetch(`http://localhost:5000/aset/${asetId}`);
      const data = await response.json();
      setCurrentAset(data);
    }
    fetchData();
  }, []);

  const handleNameChange = (e) => {
    setCurrentAset({ ...currentAset, nama: e.target.value })
  }

  const handleStockChange = (e) => {
    setCurrentAset({ ...currentAset, stock: e.target.value })
  }

  const handleSubmit = (e) => {
    const options = {
      method: 'PUT',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify(currentAset)
    }
    
    async function submitData() {
      const response = await fetch(`http://localhost:5000/aset/${currentAset._id}`, options);
      if(response.ok) {
        setIsSuccess(true);
        setTimeout(() => navigate('/') , 3000) ;
      } else{
        setIsSuccess(false)
      }
    }

    submitData();
    e.preventDefault();
  };

  const handleDeleteAset = (e) => {
    const options = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    };

    async function deleteData() {
      const response = await fetch(`http://localhost:5000/aset/${currentAset._id}`, options);
      if(response.ok) {
        navigate('/');
      }
    }

    deleteData();
  }

  const { nama, stock } = currentAset;

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
      <Button className="me-2" variant="warning" type="submit">Update Aset</Button>
      <Button onClick={handleDeleteAset} variant="danger">Hapus</Button>
      </Form>
    </>
  );
};

export default EditAsetForm;