import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import './index.css';
import ErrorPage from './routes/ErrorPage';
import Expenses from './routes/Expenses';
import Invoices from './routes/Invoices';
import Invoice from './routes/Invoice';
import Home from './routes/Home';
import ProtectedRoute from './auth/ProtectedRoute';
import Protected from './routes/Protected';
import SignIn from './routes/SignIn';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="invoices" element={<Invoices />}>
            <Route index element={
              <main style={{ padding: "1rem" }}>
                <h3>Elija una factura</h3>
              </main>
            } />
            <Route path=':invoiceId' element={<Invoice />} />
          </Route>
          <Route path="expenses" element={<Expenses />} />
          <Route element={<ProtectedRoute />}>
            <Route path='protected' element={<Protected />} />
          </Route>
          <Route path='signin' element={<SignIn />} />
          <Route path='*' element={<ErrorPage />} />
        </Route>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
