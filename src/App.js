import logo from './logo.svg';
import './App.css';

import Hello from './components/Hello';
import FunComponent from './components/FunComponent';
import MyClaass from './components/MyClass';
import Name from './components/Name';
import Example from './components/Example';
import Example2 from './components/Example2';
import Form from './components/Form';
import MyFragment from './components/MyFragment';

function App() {
 function clickme() {
    alert("The class component clicked");
};
  return (
    <div className="App">
      {/* <Name />
      <Example names ={["Python", "Java", "Javascript", "C#"]}/>
      <Example2 languages ={["React", "React Native", "Django"]}/>
      <Form /> */}
      <MyFragment />
    </div>
  )
}

export default App;
