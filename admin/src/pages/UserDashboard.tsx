// src/components/Home.tsx
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';


const UserDashboard: React.FC = () => {
  const contacts = useLoaderData() as any

  console.log(contacts);


  return (<div className='page-container'>
    {contacts.length ? (
      <ul>
        {contacts.map((contact:any) => (
          <li key={contact.id}>
            <Link to={`contacts/${contact.id}`}>
              {contact.first || contact.last ? (
                <>
                  {contact.first} {contact.last}
                </>
              ) : (
                <i>No Name</i>
              )}{" "}
              {contact.favorite && <span>★</span>}
            </Link>
          </li>
        ))}
      </ul>
    ) : (
      <p>
        <i>No contacts</i>
      </p>
    )}
  </div >)
}
export default UserDashboard;