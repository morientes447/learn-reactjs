export default function HelloWorld() {
    const propert={
        paragraph : "This is paragraph Hello World"
    }
  return (
    <>
      <HeaderHelloWorld header = "Header Hello World" header2 = "Header kedua Hello World"/>
      <ParagraphHelloWorld {...propert}/>
    </>
  );
}

function HeaderHelloWorld(props) {
  return (
    <>
      <h1 style={{
        color : "white",
        backgroundColor : "black"
      }}>{props.header.toUpperCase()} and {props.header2.toUpperCase()}</h1>
    </>
  );
}

function ParagraphHelloWorld({paragraph = "This is the default value, I forgot to add paragraph text"}) {
  const style = {
    color : "red",
    backgroundColor : "#FFFFFF"
  }
  return (
    <>
      <p style={style}>{paragraph.toLowerCase()}</p>
    </>
  );
}
