import { Link } from "react-router-dom";

const links = [
  // Fix this links array, it's an array of objects {to: "", title: ""}
 
];

export const Navbar = () => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" ,gap:"2rem",padding:"10px 20px" }}>
        {/* {links.map((el) => {
          return (
            // <Link key={el.to} style={{ padding: "10px" }} to={el.to}>
            //   {el.title}
            // </Link>
            <Link to={"/"}>Home</Link>
          ); */}
          <Link to ="/">Home</Link>
          <Link to = "/products">Products</Link>
    
      </div>
    </>
  );
};