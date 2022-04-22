import {useState,useEffect} from 'react'
import TstProps from './TstProps';
import Api from './Api/Api'
function App() {    
    return(
      <>
      <TstProps tst={'O máximo'} />
      <Api/>
      </>
    )  
}

export default App;