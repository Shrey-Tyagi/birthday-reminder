import { useState } from 'react';
import './App.css';

const birthdaysData = [
  {
    id: 1,
    name: 'Shrey',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLJ-RkJTiwhNBlUOSesi_xfWo4Jppqfs9Huttrg0Gmhg&s',
    age: 23,
  },
  {
    id: 2,
    name: 'Varshini',
    img: 'https://media.licdn.com/dms/image/C4D03AQEi8VIL9RiR_A/profile-displayphoto-shrink_100_100/0/1652882346311?e=1676505600&v=beta&t=eGcTUjlTwa6bsiVRYlPNhkYrhtm_rIzHi2kNHV_DEhU',
    age: 23,
  },
  {
    id: 3,
    name: 'Hester',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg',
    age: 33,
  },
  {
    id: 4,
    name: 'Larry',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
    age: 29,
  },
  {
    id: 5,
    name: 'Sean ',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
    age: 32,
  },
  {
    id: 6,
    name: 'Lola Gardner',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    age: 33,
  },
];

function App() {
  const [birthdays, setBirthdays] = useState(birthdaysData);
  return (
    <div className="App">
      <h1>{birthdays.length} birthdays today</h1>
      {birthdays.map((person) => {
        return <Person person={person} />;
      })}
      <button
        onClick={() => {
          setBirthdays([]);
        }}
      >
        Clear All
      </button>
      <button
        onClick={() => {
          setBirthdays(birthdaysData);
        }}
      >
        Bring them back
      </button>
    </div>
  );
}

function Person(props) {
  const { name, img, age } = props.person;
  return (
    <div className="person">
      <img src={img} alt="dp" />
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </div>
  );
}

export default App;
