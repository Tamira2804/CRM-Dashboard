import React from "react";
import { Wrapper, Image, InfoBlock, Name, Position } from "./UserInfo.styled";

const UserInfo = ({ user }) => {
  return (
    <Wrapper>
      <Image src={user.avatar} alt="avatar" />
      <InfoBlock>
        <Name>{user.name}</Name>
        <Position>{user.position}</Position>
      </InfoBlock>
    </Wrapper>
  );
};

export default UserInfo;
