import React from "react";
import { Link } from 'react-router-dom';
import PageLayout from "../layouts/PageLayout";
import { Button } from 'react-bootstrap';
import AsetList from "../components/AsetList";

const HomePage = () => {
    return (
        <>
            <PageLayout>
            <Link to="/add" className="d-grid gap-2">
                <Button variant="primary">
                Tambah Aset
                </Button>
            </Link>
            <AsetList />
            </PageLayout>
        </>
    )
}

export default HomePage;