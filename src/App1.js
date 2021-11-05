import React, { useState } from 'react';
import { Form, Container, Header } from 'semantic-ui-react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import axios from 'axios';

import './App.css';

function App() {
  const [slno, setSlno] = useState('');
  const [date, setDate] = useState('');
  const [transactions, setTransactions] = useState('');
  const [remarks,setRemarks] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const obj = { slno, date,transactions ,remarks };

    axios
      .post(
        'https://sheet.best/api/sheets/4c116102-9122-4130-a0aa-90dcdec8fdc8',
        obj
      )
      .then((response) => {
        console.log(response);
      });
  };

  return (
     <Container className="coin body"> 

      <Header as="h2" className="header">Cash flow sheet</Header>
      

      <Form className="form">
       
      <div className="tx">     
        <TextField id="outlined-basic" label="SL.NO" variant="outlined" placeholder="SL.NO" 
            onChange={(e) => setSlno(e.target.value)}> </TextField>
      </div> 
            

     
      <div className="tx"> 
<TextField id="outlined-basic" label="DATE" variant="outlined" placeholder="DATE"
            onChange={(e) => setDate(e.target.value)}> </TextField>
        </div>    
        
            <div className="tx"> 
            <TextField fullWidth label="TRANSACTIONS" id="fullWidth" placeholder="TRANSACTIONS"
            onChange={(e) => setTransactions(e.target.value)} > </TextField>
</div>

<div className="tx">    
<TextField fullWidth label="REMARKS" id="fullWidth" placeholder="REMARKS"
            onChange={(e) => setRemarks(e.target.value)} > </TextField>
</div>
        <div className="button">
        <Button variant="contained" color="success" type="submit" onClick={handleSubmit}>summit </Button>
        </div>
      </Form>
    
    </Container>
  );
}






export default App;