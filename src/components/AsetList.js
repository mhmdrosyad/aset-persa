import React, { useState, useEffect } from "react";
import { ListGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import getLocalStorageData from '../utils/getLocalStorageData';

const AsetList = () => {
  const [ asets, setAsets ] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:5000/asets');
      const data = await response.json();
      setAsets({data});
    }

    fetchData();
  }, [])

  const listItems = asets && asets.data.map((aset) => {
    return (
      <ListGroup.Item className="d-flex justify-content-between" key={aset._id}>
        {aset.nama} | Jumlah: {aset.stock}
        <Link to={`/edit/${aset._id}`}>
          <Button variant="success" size="sm">Edit</Button>
        </Link>
      </ListGroup.Item>
    )
  })
    return (
      <ListGroup className="mt-3">
        {listItems}
      </ListGroup>
    )
}

export default AsetList;