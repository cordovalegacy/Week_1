import Person3 from'./components/person3';
import Person1 from './components/person1';
import Person4 from'./components/person4';
import Person2 from './components/person2';
import './App.css';

function App() {
  return (
    <div className="App">
      <div id='wrapper'>
          <Person1 
          lastName ={'Doe'} 
          firstName ={'Jane'} 
          age ={ 45 } 
          hairColor ={'black'} 
          />    
          <Person2 
          lastName ={'Smith'} 
          firstName ={'John'} 
          age ={ 88 } 
          hairColor ={'brown'} 
          />
          <Person3
          lastName ={'Fillmore'} 
          firstName ={'Millard'} 
          age ={ 50 } 
          hairColor ={'brown'} 
          />
          <Person4 
          lastName ={'Smith'} 
          firstName ={'Maria'} 
          age ={ 62 } 
          hairColor ={'brown'} 
          />
      </div>
    </div>
  );
}

export default App;
