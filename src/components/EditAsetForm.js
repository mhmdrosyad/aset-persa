import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import getLocalStorageData from '../utils/getLocalStorageData';

const EditAsetForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [allAsets, setAllAsets] = useState(null);
  const [currentAset, setCurrentAset] = useState({ nama: '', stock: 0 });

  useEffect(() => {
    const asets = getLocalStorageData('asets');
    setAllAsets(asets);
    const asetId = location.pathname.replace('/edit/', '');
    const currentAset = asets.filter((aset) => aset.id === asetId);
    setCurrentAset(currentAset[0]);
  }, []);

  const handleNameChange = (e) => {
    setCurrentAset({ ...currentAset, nama: e.target.value })
  }

  const handleStockChange = (e) => {
    setCurrentAset({ ...currentAset, stock: e.target.value })
  }

  const handleSubmit = (e) => {
    const newAsets = allAsets.map((aset) => {
      if (aset.id === currentAset.id) {
        return { ...aset, title: currentAset.nama, stock: currentAset.stock };
      } else {
        return aset;
      }
    });
    localStorage.setItem('asets', JSON.stringify(newAsets));
    navigate('/');
    e.preventDefault();
  };

  const handleDeleteAset = (e) => {
    const newAsets = allAsets.filter((aset) => aset.id !== currentAset.id);
    setCurrentAset(null);
    setAllAsets(newAsets);
    localStorage.setItem('asets', JSON.stringify(newAsets));
    navigate('/');
  }

  const { nama, stock } = currentAset;

  return (
    <>
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