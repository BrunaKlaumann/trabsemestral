import styled from "styled-components";

export const Container = styled.div`
  max-width: 900px;
  margin: 50px auto;
  ul {
    margin-top: 30px;
  }
  form {
    margin-top: 20px;
    margin-left: 0;
    justify-content: space-between;
    align-items: center;
    input {
      width: 700px;
      background: #eee;
      border: none;
      border-radius: 4px;
      margin: 10px 10px;
      padding: 10px 10px;
    }
    select{
      width: 700px;
      background: #eee;
      border: none;
      border-radius: 4px;
      margin: 10px 10px;
      padding: 10px 10px;
    }
    button{
      border-radius: 4px;
      width: 100px;
      border: none;
      height: 36px;
      background: #fff;
      float: right;
    }
    span {
      color: #FFF
      display: block;
      padding: 5px 10px;
    }
  }
`;

export const ProdutoStyle = styled.li`
  padding: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  strong {
    color: #000;
    font-size: 16px;
    font-weight: normal;
  }
`;

export const ButtonIcon = styled.button`
  background: transparent;
  border: none;
`;
