import React from "react";
import PageLayout from "../layouts/PageLayout";
import EditAsetForm from "../components/EditAsetForm";

const EditPage = () => {
  return (
    <>
      <PageLayout>
        <h2>Edit Aset</h2>
        <EditAsetForm />
      </PageLayout>
    </>
  );
};

export default EditPage;