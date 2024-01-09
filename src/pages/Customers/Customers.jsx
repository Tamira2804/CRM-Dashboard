import React from "react";
import customers from "../../services/customers.json";
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
} from "./Customers.styled";
import sprite from "../../assets/images/icons/sprite.svg";

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
          {customers.map((customer) => (
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
    </Wrapper>
  );
};

export default Customers;
