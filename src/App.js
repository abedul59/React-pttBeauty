import React from "react"

import { HashRouter, Switch, Route } from 'react-router-dom';
import GetPttBeauty from './GetPttBeauty'
import GetIgBeauty from './GetIgBeauty'
import Menu from './Menu'
import Mainpage from './Mainpage'
import './App.css'

function App() {
    return (
        <div>
  <HashRouter>
	  <Menu />
	    <Switch>
	      <Route path="/getigbeauty" component={GetIgBeauty} />
	      <Route path="/getpttbeauty" component={GetPttBeauty} />  
	      <Route path="/mainpage" component={Mainpage} />  
	    </Switch>
	  </HashRouter>,
            </div>
)
    }

export default App;
