import './module.css';
import ContactList from './components/ContactList';


function App() {
  
  const contacts = [
    {
      id:"1",
      name:"Annette Murphy",
      email:"sara.cruz@gamil.com",
      img:"https://thumbs.dreamstime.com/z/portrait-beautiful-woman-looking-to-side-blonde-person-i-half-profile-beautiful-woman-looking-to-side-beautiful-102659599.jpg",
      phone:"7895245625"
    },
    {
      id:"2",
      name:"Theresa Waston",
      email:"michael.mitchell@gamil.com",
      img:"https://cdn.w600.comps.canstockphoto.com/woman-is-in-profile-and-looking-to-the-picture_csp51971671.jpg",
      phone:"9875462578"
    },
    {
      id:"3",
      name:"Cody Howard",
      email:"glen.lane@gamil.com",
      img:"https://thumbs.dreamstime.com/z/portrait-beautiful-woman-looking-to-side-blonde-person-i-half-profile-beautiful-woman-looking-to-side-beautiful-102659599.jpg",
      phone:"8754923154"
    },
    {
      id:"4",
      name:"Max Lane",
      email:"max.fleming@gamil.com",
      img:"https://cdn.w600.comps.canstockphoto.com/woman-is-in-profile-and-looking-to-the-picture_csp51971671.jpg",
      phone:"9572654785"
    },
    {
      id:"5",
      name:"Marvin Fisher",
      email:"marvin.fisher@gamil.com",
      img:"https://cdn.w600.comps.canstockphoto.com/woman-is-in-profile-and-looking-to-the-picture_csp51971671.jpg",
      phone:"7895245629"
    },
    {
      id:"6",
      name:"Brooklyn Mccoy",
      email:"chad.stephen@gamil.com",
      img:"https://thumbs.dreamstime.com/z/portrait-beautiful-woman-looking-to-side-blonde-person-i-half-profile-beautiful-woman-looking-to-side-beautiful-102659599.jpg",
      phone:"7895245645"
    },

  ];


  return (
    <div className="App" >
      <h1>Contact App</h1>
      <hr/>
      <div>
       <ContactList  contacts={contacts}/>  
      </div>   
    </div>
  );
}

export default App;
