import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { Form, Button, Alert } from 'react-bootstrap';
import getLocalStorageData from '../utils/getLocalStorageData';

const AddAsetForm = () => {
  const [state, setState] = useState({ nama: '', stock: 0});
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();
  const handleNameChange = (e) => {
    setState({ ...state, nama: e.target.value })
  }

  const handleStockChange = (e) => {
    setState({ ...state, stock: e.target.value })
  }

  const handleSubmit = (e) => {
    const asets = getLocalStorageData('asets')
    const asetId = uuidv4();

    asets.push({ ...state, id: asetId });

    localStorage.setItem('asets', JSON.stringify(asets));
    setIsSuccess(true);
    e.preventDefault();
  }

  const { nama, stock } = state;

  return (
    <>
     {isSuccess && <Alert variant="success">Data Berhasil Ditambahkan</Alert>}
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