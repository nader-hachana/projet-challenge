import React,{ useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import'mdbreact/dist/css/mdb.css';
import "./assets/css/general.css"
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { faBars,} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Admin_HP from './components/Admin/Admin_HP'

function App() {
  const [visible, setVisible] = useState(false)
  const open=()=>setVisible(!visible)
  return (
    <div className="App">
      <Sidebar close={open} visible={visible}>
        <Navbar closeTester={visible} button={<FontAwesomeIcon className="open-button" onClick={()=>open()} icon={faBars} />}/>
        <div className="main-container"><Admin_HP/> </div>
        <div></div>
      </Sidebar>  
    </div>
  );
}
export default App;