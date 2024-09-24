import React, { useState } from 'react';
import { Badge, Button, Notification, InputBox, Dropdown } from 'rahul-ds';
import '../node_modules/rahul-ds/src/style.css'
import './Dashboard.css';

const Dashboard = () => {

  const [text, setText] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [notify, setNotify] = useState('');

  const options = [
    { value: 'TN', label: 'Tamil Nadu' },
    { value: 'KL', label: 'Kerala' },
    { value: 'KA', label: 'Karnataka' },
  ];


  const removeNotification = () => {
    setNotify(false);
  };
  
  const handleClick = () => {
    if(text && selectedOption){
      setNotify(true);
      console.log(text, selectedOption);
    }
  }

  return (
    <div className="dashboard">
      <h1>ChargeBee</h1>
      <div>
        <Badge  
        text="Badge" 
        size="medium" 
        variant="primary" />
      </div>

      <InputBox 
       type="text"
        placeholder="Please enter your name"
        value={text}
        onChange={(e) => setText(e.target.value)}
        size="medium" />

      <Dropdown 
        options={options}
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
        placeholder="Select State" />

      <Button  
        label="Submit"
        onClick={handleClick}
        size="medium"
        variant="primary"/>

      <div>
        {notify && 
          <Notification
            message="Good to go!!!"
            type="success"
            size="medium"
            onClose={() => removeNotification()}
          />
        }
      </div>
    </div>

  )
}

export default Dashboard