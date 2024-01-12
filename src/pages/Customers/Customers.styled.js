import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--bg-primary);
  border-radius: 20px;

  @media screen and (min-width: 768px) {
    padding: 30px 44px 40px 38px;
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
  @media screen and (min-width: 1280px) {
  }
`;

//Title
export const TitleBlock = styled.div`
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 12px;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const Title = styled.h2`
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.22px;
  @media screen and (min-width: 768px) {
    font-size: 22px;
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const SubTitle = styled.p`
  color: #16c098;
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.14px;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
  @media screen and (min-width: 1280px) {
  }
`;

//Search
export const InputWrapper = styled.div`
  width: 325px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  background-color: var(--bg-input);
  padding: 8px;
  border-radius: 10px;

  @media screen and (min-width: 768px) {
    width: 216px;
    height: 38px;

    margin-right: 9px;
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const Input = styled.input`
  width: 100%;
  background-color: inherit;
  border: none;
  outline: none;

  &::placeholder {
    color: var(--text-secondary);
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const Icon = styled.svg`
  width: 24px;
  height: 24px;
  stroke: var(--text-secondary);
`;

//Table
export const Table = styled.table`
  @media screen and (max-width: 767px) {
    min-width: 350px;
    border-collapse: collapse;

    th,
    td {
      display: none;
    }

    td:nth-child(1),
    th:nth-child(1),
    td:nth-child(2),
    th:nth-child(2),
    td:nth-child(6),
    th:nth-child(6),
    td:nth-child(7),
    th:nth-child(7) {
      display: table-cell;
      padding: 12px 8px;
      text-align: left;
      border-bottom: 1px solid var(--gray);
    }

    td:nth-child(6),
    th:nth-child(6),
    td:nth-child(7),
    th:nth-child(7) {
      text-align: center;
    }
  }

  @media screen and (min-width: 768px) {
    min-width: 100%;

    th {
      padding: 12px 8px;
      text-align: left;
      border-bottom: 1px solid var(--gray);
    }

    td {
      padding: 24px 8px;
      text-align: left;
      border-bottom: 1px solid var(--gray);
    }
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const TableHeaderMobile = styled.th`
  @media screen and (min-width: 768px) {
    display: none;
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const TableColumnMobile = styled.td`
  @media screen and (max-width: 767px) {
    display: block;
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const MoreBtn = styled.button`
  background: var(--bg-secondary);
  border: 1px solid var(--gray);
  padding: 4px;
  border-radius: 4px;
`;

export const TableHeader = styled.th`
  color: var(--text-th);
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.14px;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const TableColumn = styled.td`
  width: inherit;
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.14px;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 84px;
    height: 29px;
    padding: 4px 12px;
    margin: auto;

    border-radius: 4px;
    border: 1px solid
      ${(props) =>
        props.$status ? "var(--text-active)" : "var(--text-inactive)"};
    color: ${(props) =>
      props.$status ? "var(--text-active)" : "var(--text-inactive)"};
    background-color: ${(props) =>
      props.$status ? "var(--bg-active)" : "var(--bg-inactive)"};
    text-align: center;
    font-family: "Poppins", sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.14px;
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
  }
`;

//Pagination
export const PaginationWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 30px;

  @media screen and (min-width: 768px) {
    justify-content: space-between;
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const CounterText = styled.p`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    color: var(--text-secondary);
    font-family: "Poppins", sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.14px;
  }
  @media screen and (min-width: 1280px) {
  }
`;
