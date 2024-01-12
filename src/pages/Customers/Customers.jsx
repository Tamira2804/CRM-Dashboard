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
  TableHeaderMobile,
  TableColumnMobile,
  MoreBtn,
  TableHeader,
  TableColumn,
  PaginationWrapper,
  CounterText,
} from "./Customers.styled";
import sprite from "../../assets/images/icons/sprite.svg";

import customers from "../../services/customers.json";
import Paginate from "components/Paginate";
import ModalDetails from "components/ModalDetails";

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
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedClient, setSelectedClient] = useState(null);
  const customersPerPage = 8;

  const handleShowMore = (client) => {
    // Відкрити модальне вікно або встановити selectedClient для відображення деталей
    setSelectedClient(client);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const filteredCustomers = customers.filter((customer) =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastCustomer = currentPage * customersPerPage;
  const indexOfFirstCustomer = indexOfLastCustomer - customersPerPage;
  const currentCustomers = filteredCustomers.slice(
    indexOfFirstCustomer,
    indexOfLastCustomer
  );

  const totalPages = Math.ceil(filteredCustomers.length / customersPerPage);

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
          <Input
            type="text"
            name="search"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearchChange}
          />
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
            <TableHeaderMobile></TableHeaderMobile>
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
              <TableColumnMobile>
                <MoreBtn onClick={() => handleShowMore(customer)}>
                  Show More
                </MoreBtn>
              </TableColumnMobile>
            </tr>
          ))}
        </tbody>
      </Table>
      <PaginationWrapper>
        <CounterText>
          Showing data {indexOfFirstCustomer + 1} to {indexOfLastCustomer} of{" "}
          {filteredCustomers.length} entries
        </CounterText>

        <Paginate
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      </PaginationWrapper>
      {selectedClient && (
        <ModalDetails
          client={selectedClient}
          onClose={() => setSelectedClient(null)}
        />
      )}
    </Wrapper>
  );
};

export default Customers;
