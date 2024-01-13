export const getUsers = async () => {
    const url = `http://localhost:3001/user`
    const resp = await fetch(url);

    const {users} = await resp.json();

    return users;
}

export const addUser = async (data) => {
    const url = `http://localhost:3001/user`;
    const resp = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await resp.json();
    return result;
  };
  
  export const updateUser = async (userId, data) => {
    const url = `http://localhost:3001/user/${userId}`;
    const resp = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  
    const result = await resp.json();
    return result;
  };
  
  export const deleteUser = async (userId) => {
    const url = `http://localhost:3001/user/${userId}`;
    const resp = await fetch(url, {
      method: 'DELETE',
    });
  
    const result = await resp.json();
    return result;
  };
  