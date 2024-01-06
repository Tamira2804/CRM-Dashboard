import React, { useEffect, useState } from "react";
import customers from "../../services/customers.json";

const Customers = () => {
  // const [tableRows, setTableRows] = useState([]);

  // const fetchData = async (source) => {
  //   try {
  //     const response = await fetch(source);
  //     const data = await response.json();
  //     setTableRows(data);
  //     console.log("data", data);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchData(customers); // Завантаження з локального JSON

  //   // Потім, перейти на бекенд, змініти джерело даних
  //   // fetchData('URL_до_бекенду');
  // }, []);

  return (
    <div>
      <h2>All Customers</h2>
      <p>Active members</p>

      <input type="text" name="search" placeholder="Seach" />

      <table>
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Company</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Country</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.name}</td>
              <td>{customer.company}</td>
              <td>{customer.phone}</td>
              <td>{customer.email}</td>

              <td>{customer.country}</td>
              <td>{customer.status ? "Active" : "Inactive"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Customers;
