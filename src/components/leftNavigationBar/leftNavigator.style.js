import styled from "styled-components";

export const Positioner = styled.div`
  width: 200px;
  position: fixed;
  height: 100%;

  .ant-menu {
    height: 100%;
  }

  .bookmark {
    float: right;
    margin-top: 7.5%;
    .marked {
      display: none;
    }
  }
`;
