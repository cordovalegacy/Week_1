import Person from './components/person';
import './App.css';

function App() {
  return (
    <div className="App">
      <div id='wrapper'>
          <Person 
          lastName ={'Doe'} 
          firstName ={'Jane'} 
          age ={ 45 } 
          hairColor ={'Black'}
          />    
          <Person 
          lastName ={'Smith'} 
          firstName ={'John'} 
          age ={ 88 } 
          hairColor ={'Brown'}
          />
          <Person
          lastName ={'Fillmore'} 
          firstName ={'Millard'} 
          age ={ 50 } 
          hairColor ={'Brown'} 
          />
          <Person 
          lastName ={'Smith'} 
          firstName ={'Maria'} 
          age ={ 62 } 
          hairColor ={'Brown'} 
          />
      </div>
    </div>
  );
}

export default App;
