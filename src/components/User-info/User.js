import React, { useState, useEffect } from 'react';
import axios from 'axios';
function UserData({ authToken }) {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    async function fetchUserData() {
      const response = await axios.get('http://localhost:8080/user-auth/authenticate', {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });
      const data = await response.json();
      setUserData(data);
    }
    fetchUserData();
  }, [authToken]);

  if (!userData) {
    return <p>Loading user data...</p>;
  }

  return (
    <div>
      <h2>{userData.name}</h2>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserData;
