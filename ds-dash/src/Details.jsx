import React, { useState } from 'react';
import { Badge, Button, Notification, InputBox, Dropdown } from 'rahul-ds';
import '../node_modules/rahul-ds/src/style.css'
import './Details.css';

const Details = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pid, setPID] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [notify, setNotify] = useState('');

  const options = [
    { value: 'TN', label: 'Tamil Nadu' },
    { value: 'KL', label: 'Kerala' },
    { value: 'KA', label: 'Karnataka' },
  ];

  const removeNotification = () => {
    setNotify(false);
    setName("");
    setPID('');
    setEmail("");
    setSelectedOption("");
  };

  const handleClick = () => {
    if(name && selectedOption){
      setNotify(true);
    }
  }

  return (
    <div className="details p-5">
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Details</h2>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700" htmlFor="name">
                Name
              </label>
              <InputBox 
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  value={name}
                  className="mt-2 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                  onChange={(e) => setName(e.target.value)}
                  size="medium"
               />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700" htmlFor="number">
                PID <Badge text="new" size="medium" variant="primary"/>
              </label>
              <InputBox 
                  type="number"
                  id="number"
                  placeholder="Enter your Person ID"
                  value={pid}
                  className="mt-2 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                  onChange={(e) => setPID(e.target.value)}
                  size="medium"
               />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                Email <Badge text="Optional" size="medium" />
              </label>
              <InputBox 
                  type="email"
                id="email"
                  placeholder="Enter your email"
                  value={email}
                  className="mt-2 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                  onChange={(e) => setEmail(e.target.value)}
                  size="medium"
               />
            </div>
            <div className="mb-10">
              <Dropdown 
              options={options}
              value={selectedOption}
              className="w-full"
              onChange={(e) => setSelectedOption(e.target.value)}
              placeholder="Select your State" 
            />
            </div>
            <Button
                label="Submit"
                onClick={handleClick}
                size="medium"
                variant="primary"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                disabled = {name && selectedOption ? '':'disabled'}
            />
            <div>
              {notify && 
                <Notification
                  message="Your details recieved, Thank you!"
                  type="success"
                  size="medium"
                  onClose={() => removeNotification()}
                />
              }
            </div>
          </form>
        </div>
      </div>
    </div>

  )
}

export default Details