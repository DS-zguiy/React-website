import React from 'react';
import useUserStore from '@/stores/useUserStore';

const UserProfile: React.FC = () => {
  const { name, email, setUser, clearUser } = useUserStore();

  const handleSetUser = () => {
    setUser('John Doe', 'john.doe@example.com');
  };

  const handleClearUser = () => {
    clearUser();
  };

  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <button onClick={handleSetUser}>Set User</button>
      <button onClick={handleClearUser}>Clear User</button>
    </div>
  );
};

export default UserProfile;
