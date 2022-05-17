import { useState } from "react";

const ContactCard = (props) => {
  const { id, name, email,img,phone } = props.contact;

  const [active,setActive] = useState(false)
  return (
    <div key={id} className="item" onClick={()=>setActive(!active)}>
      <img className="image" src={img}  />
      <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>
        {active && <div className="phone">{phone}</div>}
      </div>
    </div>
  );
};

export default ContactCard;