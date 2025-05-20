/*
import React from 'react'
import { MyComponent } from './components/MyComponent'
import { MyComponent2 } from './components/MyComponent2'
export const App = () => {
  return (
    <div>
      <MyComponent />
      <MyComponent2 />
    </div>
  )
}
export default App;
*/

/* 
import React from 'react'
export const App = () => {
  const marks = [1,3,4,5,6]
  return(
    <div>
      {
        marks.map(( eachMark,index)=> <li> {eachMark}</li>)
      }
    </div>
  )
}
export default App;
*/
/*
import React from 'react'
import {Menubar} from './Menubar'
import {BrowseRouter,Route,Routes}from 'react-router-dom'
import {Home} from './Home'
import {About} from './About'
import {Dashboard} from './Dashboard'
export const App= ()=> {
  return (
    <div>
      <BrowseRouter>
      <Menubar/>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/about/:pname' element = {<About/>}/>
        <Route path='/dashboard' element = {<Dashboard/>}/>
      </Routes>
      </BrowseRouter>
    </div>
  )
}
 export default App;
 */

 import React , {usestate} from 'react';
 import {Home} from './Home ';
 export const App = () => {
  const [username]= useState("Preeti");
  return (
  <div>
    <Home username={username} />
  </div>
  );
 }
