import React from "react";
import { ListGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import getLocalStorageData from '../utils/getLocalStorageData';

const AsetList = () => {
  const asets = getLocalStorageData('asets');
  const listItems = asets.map((aset) => {
    return (
      <ListGroup.Item className="d-flex justify-content-between" key={aset.id}>
        {aset.nama} | Jumlah: {aset.stock}
        <Link to={`/edit/${aset.id}`}>
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