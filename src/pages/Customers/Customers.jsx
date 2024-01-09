import React, { useState } from "react";
import {
  Wrapper,
  Header,
  TitleBlock,
  Title,
  SubTitle,
  InputWrapper,
  Input,
  Icon,
  Table,
  TableHeader,
  TableColumn,
  PaginationWrapper,
  CounterText,
  Pagination,
  PageNumber,
} from "./Customers.styled";
import sprite from "../../assets/images/icons/sprite.svg";

import customers from "../../services/customers.json";
import { pagination } from "helpers/pagination";

const Customers = () => {
  // const [customers, setCustomers] = useState([]);

  // const fetchData = async (source) => {
  //   try {
  //     const response = await fetch(source);
  //     const data = await response.json();
  //     setCustomers(data);
  //     console.log("data", data);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  // useEffect(() => {
  //   // fetchData('URL_до_бекенду');
  // }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const customersPerPage = 8;

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const indexOfLastCustomer = currentPage * customersPerPage;
  const indexOfFirstCustomer = indexOfLastCustomer - customersPerPage;
  const currentCustomers = customers.slice(
    indexOfFirstCustomer,
    indexOfLastCustomer
  );

  const totalPages = Math.ceil(customers.length / customersPerPage);

  const pagesToShow = pagination(currentPage, totalPages);

  return (
    <Wrapper>
      <Header>
        <TitleBlock>
          <Title>All Customers</Title>
          <SubTitle>Active members</SubTitle>
        </TitleBlock>

        <InputWrapper>
          <Icon>
            <use href={`${sprite}#icon-search-1`} />
          </Icon>
          <Input type="text" name="search" placeholder="Search" />
        </InputWrapper>
      </Header>
      <Table>
        <thead>
          <tr>
            <TableHeader>Customer Name</TableHeader>
            <TableHeader>Company</TableHeader>
            <TableHeader>Phone Number</TableHeader>
            <TableHeader>Email</TableHeader>
            <TableHeader>Country</TableHeader>
            <TableHeader>Status</TableHeader>
          </tr>
        </thead>
        <tbody>
          {currentCustomers.map((customer) => (
            <tr key={customer.id}>
              <TableColumn>{customer.name}</TableColumn>
              <TableColumn>{customer.company}</TableColumn>
              <TableColumn>{customer.phone}</TableColumn>
              <TableColumn>{customer.email}</TableColumn>

              <TableColumn>{customer.country}</TableColumn>
              <TableColumn $status={customer.status}>
                <span>{customer.status ? "Active" : "Inactive"}</span>
              </TableColumn>
            </tr>
          ))}
        </tbody>
      </Table>
      <PaginationWrapper>
        <CounterText>
          Showing data {indexOfFirstCustomer + 1} to {indexOfLastCustomer} of{" "}
          {customers.length} entries
        </CounterText>
        <Pagination>
          <PageNumber disabled={currentPage === 1} onClick={handlePrevPage}>
            &lt;
          </PageNumber>
          {pagesToShow.map((number, index) => (
            <PageNumber
              key={index}
              onClick={() =>
                number !== "..." && handlePageClick(parseInt(number))
              }
              $active={currentPage === parseInt(number)}
              disabled={number === "..."}
            >
              {number}
            </PageNumber>
          ))}
          <PageNumber
            disabled={currentPage === totalPages}
            onClick={handleNextPage}
          >
            &gt;
          </PageNumber>
        </Pagination>
      </PaginationWrapper>
    </Wrapper>
  );
};

export default Customers;
