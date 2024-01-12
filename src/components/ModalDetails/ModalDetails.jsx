import React from "react";
import {
  Overlay,
  ModalWrapper,
  CloseButton,
  Table,
  TableHeader,
  TableColumn,
} from "./ModalDetails.styled";

const ModalDetails = ({ client, onClose }) => {
  return (
    <>
      <Overlay onClick={onClose} />
      <ModalWrapper>
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
            <tr>
              <TableColumn>{client.name}</TableColumn>
              <TableColumn>{client.company}</TableColumn>
              <TableColumn>{client.phone}</TableColumn>
              <TableColumn>{client.email}</TableColumn>
              <TableColumn>{client.country}</TableColumn>
              <TableColumn $status={client.status}>
                <span>{client.status ? "Active" : "Inactive"}</span>
              </TableColumn>
            </tr>
          </tbody>
        </Table>

        <CloseButton onClick={onClose}>✖</CloseButton>
      </ModalWrapper>
    </>
  );
};

export default ModalDetails;
