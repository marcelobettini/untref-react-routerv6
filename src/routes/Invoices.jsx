import React from 'react';
import { NavLink, Outlet, useSearchParams, useLocation } from 'react-router-dom';
import { getInvoices } from '../data';

function QueryNavLink({ to, ...props }) {
  let location = useLocation();
  console.log(location.search);
  return <NavLink to={to + location.search} {...props} />;
}


export default function Invoices() {
  const [searchParams, setSearhParams] = useSearchParams();
  const invoices = getInvoices();
  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        <input
          value={searchParams.get("filter") || ""}
          onChange={(e) => {
            let filter = e.target.value;
            if (filter) {
              setSearhParams({ filter });
            } else {
              setSearhParams({});
            }
          }}
        />

        {invoices.filter((invoice) => {
          let filter = searchParams.get("filter");
          if (!filter) return true;
          let name = invoice.name.toLowerCase();
          return name.includes(filter.toLowerCase());
        })
          .map(invoice => (
            <QueryNavLink
              style={({ isActive }) => {
                return {
                  display: 'block',
                  margin: '1rem 0',
                  color: isActive ? "tomato" : null
                };
              }}
              to={`/invoices/${invoice.number}`}
              key={invoice.number}>
              {invoice.name}
            </QueryNavLink>
          ))}
      </nav>

      <Outlet />
    </div>
  );
}
