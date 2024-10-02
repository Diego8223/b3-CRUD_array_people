import { useState } from 'react'
import './App.css'
import { People } from './components/People';

function App() {

  const [people, setPeople] = useState([
    {
      id: 1,
      name: "Valentina Ramirez",
      role: "Backend Developer",
      img: "https://bootdey.com/img/Content/avatar/avatar8.png"
    },
    {
      id: 2,
      name: "Diego Ruiz",
      role: "QA",
      img: "https://bootdey.com/img/Content/avatar/avatar2.png"
    },
    {
      id: 3,
      name: "Fernanda Soto",
      role: "Frontend Developer",
      img: "https://bootdey.com/img/Content/avatar/avatar3.png"
    }
  ]);

  return (
    <div>
      <People
        people={people}
        setPeople={setPeople}
      />
    </div>
  )
}

export default App