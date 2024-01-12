export const getUsers = async () => {
    const url = `http://localhost:3001/user`
    const resp = await fetch(url);

    const {users} = await resp.json();

    return users;
}