import React from 'react';
import { useParams, useNavigate, useLocation } from 'react-router';
import { getInvoice, deleteInvoice } from '../data';
import ErrorPage from './ErrorPage';
import { Button } from '../styled/Button';

export default function Invoice() {
  const navigate = useNavigate();
  const location = useLocation();

  const params = useParams();
  const invoice = getInvoice(Number(params.invoiceId));
  if (invoice === undefined) return <ErrorPage />;
  return (
    <main style={{ padding: "1rem" }}>
      <h2>Total Adeudado: {invoice.amount}</h2>
      <h3>
        {invoice.name}
      </h3>
      <p>Vencimiento: {invoice.due}</p>
      <Button onClick={() => {
        deleteInvoice(invoice.number);
        navigate("/invoices" + location.search);
      }
      }>Borrar</Button>
    </main>
  );
}
