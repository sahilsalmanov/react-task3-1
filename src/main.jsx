import React from 'react'
import ReactDOM from 'react-dom/client'
import Wine from './Wine'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <div className='container'>
        <div className="container2">
    <div className='serab1'>
      <h1>Name1</h1>
<span><Wine title = {'adam'} description = 'gozel' rating = '5.5' /></span>
</div>
<div className='serab2'>
<h1>Name2</h1>
<span><Wine title = {'adam2'} description = 'gozel2' rating = '5.6' /></span>
</div>
<div className='serab3'>
<h1>Name3</h1>
<span><Wine title = {'adam3'} description = 'gozel3' rating = '5.7' /></span>
</div>
    </div>
    </div>
  </React.StrictMode>
)
