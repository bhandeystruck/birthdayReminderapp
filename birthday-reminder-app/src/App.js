import React, {useState} from "react";
import './App.css';
import List from "./List";
import data from "./data";

function App() {


  //need state to store people
  const [people, setPeople] = useState(data);





  return (
    <main>
      <section className='container'>
        {/* using the state to display the number of birthdays today */}
        <h3>{people.length} birthday's today</h3>
        {/* List component */}
        {/* people is passed as prop to the list component */}
        <List people={people} />
        {/* Button */}
        {/* Button whos onclick will clear the state to empty */}
        <button onClick={()=>setPeople([])}>Clear All</button>
      </section>
    </main>
 
  );
}

export default App;
