import React from "react";
import PageLayout from "../layouts/PageLayout";
import AddAsetForm from "../components/AddAsetForm";

const AddPage = () => {
  return (
    <>
      <PageLayout>
        <h2>Tambah Aset</h2>
        <AddAsetForm />
      </PageLayout>
    </>
  );
};

export default AddPage;