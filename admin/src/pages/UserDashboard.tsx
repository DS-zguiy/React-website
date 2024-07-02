// src/components/Home.tsx
import React from 'react';
import { useLoaderData } from 'react-router-dom';


const UserDashboard: React.FC = () => {
  const contact = useLoaderData() as any




  return (<div className='page-container'>
    {contact ? (
      <ul>
     <li>{contact.name}</li>
     <li>{contact.age}</li>
     <li>{contact.gender}</li>
      </ul>
    ) : (
      <p>
        <i>No contacts</i>
      </p>
    )}
  </div >)
}
export default UserDashboard;