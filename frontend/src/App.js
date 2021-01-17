import './App.css';
import Sidebar from './Components/Sidebar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom' 
import { SidebarData } from './Components/SidebarData';
import { dashboard } from './pages/Dashboard';
import Dashboard from './pages/Dashboard'; 
import Project from './pages/Project'; 
import {FetchData} from './Components/FetchData'
const url = 'http://127.0.0.1:8000/api/ticket-list/'

function App() {
  // const { loading, products } = FetchData(url)
  // console.log(products)


  return (
    <Router> 
      <Sidebar />
      <Switch> 
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/project" exact component={Project} />

      </Switch> 
    </Router>
  );
}

export default App;
