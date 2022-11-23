import React from 'react'
import ReactDOM from 'react-dom/client'
import Wine from './Wine'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <div className='container'>
        <div className="container2">
    <div className='serab1'>
      <h1>Merlot</h1>
<span><Wine title = {'Germany'} description = 'pink' amount = '0.75' rating = {8.6} heart /></span>
</div>
<div className='serab2'>
<h1>Cabernet Sauvignon</h1>
<span><Wine title = {'Japan'} description = 'red' amount = '0.8' rating = {5.7} /></span>
</div>
<div className='serab3'>
<h1>Airen</h1>
<span><Wine title = {'Niderland'} description = 'white' amount = '0.5' rating = {7.9} heart /></span>
</div>
    </div>
    </div>
  </React.StrictMode>
)
