import './App.css'; 
import {BrowserRouter as Router, Route} from 'react-router-dom'; 
import Login from './login'; 
import Register from './register'; 
 
function App() { 

return ( 
	<Router> 
	<div className="App"> 
	<Route exact path='/register' component={Register} /> 
	<Route exact path='/login' component={Login} /> 
	</div> 
	</Router> 
); 
} 

export default App; 
