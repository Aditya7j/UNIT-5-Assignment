import './App.css';
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 50%;
  height: 100px;
  margin: auto;
  margin-top: 50px;
  flex-wrap: wrap;

`
const Button = styled.button`
    margin: 5px;
    width: 200px;

    background-color: ${(props=>props.type === "primary" && "blue")};
    color: ${(props=>props.type==="primary"&& "white")};
    border: ${(props=>props.type==="primary"&&"none")};

    background-color: ${(props=>props.type === "default" && "white")};
    color: ${(props=>props.type==="default"&& "black")};
    font-weight: ${(props=>props.type==="default" && "700")};
    border: ${(props=>props.type==="default"&&"1px solid lightgray")};

    background-color: ${(props=>props.type === "dashed" && "white")};
    color: ${(props=>props.type==="dashed"&& "black")};
    font-weight: ${(props=>props.type==="dashed" && "700")};
    border: ${(props=>props.type==="dashed"&&"1px dashed black")};

    background-color: ${(props=>props.type === "text" && "white")};
    color: ${(props=>props.type==="text"&& "black")};
    font-weight: ${(props=>props.type==="text" && "900")};
    border: ${(props=>props.type==="text"&&"none")};


    background-color: ${(props=>props.type === "link" && "white")};
    color: ${(props=>props.type==="link"&& "teal")};
    font-weight: ${(props=>props.type==="link" && "600")};
    border: ${(props=>props.type==="link"&&"none")};
`

function App() {
  return (
      <Container>
          <Button type='primary'>Primary Button</Button>
          <Button type='default'>Default Button</Button>
          <Button type='dashed'>Dashed Button</Button>
          <Button type='text'>Text Button</Button>
          <Button type='link'>Link Button</Button>
      </Container>
  );
}

export default App;
