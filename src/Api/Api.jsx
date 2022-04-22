
import axios from 'axios'
import {useState,useEffect} from 'react'
import './Api.css'
function Api() {
  const [dataManip,setDataManip] = useState('')
  
  useEffect(() => {
    getData();
}, []);

  async function getData(){
    try {
      const res = await axios.get('https://disease.sh/v3/covid-19/countries');
      setDataManip(res.data);
    } catch (error) {
      console.error(error);
    }    
  } 
  console.log(dataManip)  

  const loadData = () => {
    if (dataManip.length <= 0) return false
    return dataManip.map((el,index)=>{
      return (
      <tr key={index}>
          <td>
            {dataManip.map(e => {
              if (el.countryInfo._id === e.countryInfo._id) return e.country 
            })}
          </td>   
          <td>
            {dataManip.map(e => {
              if (el.countryInfo._id === e.countryInfo._id) return e.cases 
            })}
          </td>             
      </tr>
      )
    })          
    }
    return(
      <>
      <row>
      <table class="table">  
        <thead>              
         <tr>
            <th>Country</th>
            <th>Cases</th>
            <th className='btn'><button>Generate Dashboard</button></th>
            
          </tr>          
        </thead>
        <tbody>{loadData()}</tbody>
      </table>
      </row>
      </>
    )
  
}

export default Api;