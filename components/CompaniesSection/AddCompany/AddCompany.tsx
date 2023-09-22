'use client';

import FormAddCompany from "@/components/Forms/FormAddCompany/FormAddCompany";
import Modal from "@/components/ui/Modal/Modal";
import { useState } from "react";
import { createPortal } from "react-dom";

export default function AddCompany() {
  const [show, setShow] = useState<boolean>(false);

  function handleOpen(): void {
    setShow(true);
  }

  return (
    <div>
      <button onClick={handleOpen}>Add company</button>
      {show && createPortal(
        <Modal onClose={() => setShow(false)}><FormAddCompany /></Modal>,
        document.body
      )}
    </div>
  );
}