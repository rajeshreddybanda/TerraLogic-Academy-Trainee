import  React ,{  useState } from 'react';
import axiosClient from './api/axiosClients';
import { User } from './types/User';
//import exp from 'constants';

const CrudOperations:React.FunctionComponent = () => {    
    const [users, setUsers] = useState<User[]>([]);
    const[formData ,setFormData] = useState<User>({ name: "", email: "", phone: ""});
    const [selectedId, setSelectedId] = useState<number | null>(null);

// Get all users 
  const handleFetchUsers= async () => {
    try {
        const res = await axiosClient.get<User[]>("/users");
        setUsers(res.data);
        //console.log(res.data)
        console.table(res.data)
        
    } catch(err) {
        console.error("Error fetching users:", err);
    }
    };

// post (add ) user 
const handleAddUser = async() => {
    try {
        const res = await axiosClient.post<User>("/users", formData);   
        setUsers([...users, res.data]);
        console.log("User added:", res.data);
        setFormData({ name: "", email: "", phone: ""});
    }catch(err) {
        console.error("Error adding user:", err);
    }   
};

// put (update ) user 
const handleUpdateUser  = async() => {
    if(!selectedId) return alert ("select a user id to update");
    try {
        const res = await axiosClient.put<User>(`/users/${selectedId}`, formData);   
        setUsers(users.map((u)=> (u.id === selectedId ?{ ...u,...formData} : u   )));
        console.log("User updated:", res.data);
        setFormData({ name: "", email: "", phone: ""});
        setSelectedId(null);
    }catch(err) {
        console.error("Error updating user:", err);
    }
};

//delete user 
const handleDeleteUser = async(id:number)=> {
    try {
        await axiosClient.delete(`/users/${id}`);
        setUsers(users.filter((u) => u.id !== id));
        console.log(`User deleted with id ${id} deleted`);
    }catch(err) {   
        console.log("Error deleting user:", err);
}
}

// handle input changes
const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData,[e.target.name]:e.target.value});
};
// return (
//     <div style = {{padding:30}}>
//         <h1>React +TypeScript CRUD (Axios)</h1>
//     </div>
// )

// Load user  data into form for edit 

const handleEditClick = (users:User)=>{
    setSelectedId(users.id!);
    setFormData({name:users.name,email:users.email,phone:users.phone})

};
return(
    <div style={{padding:30}}>
    <h1>React +TypeScript CRUD (Axios)</h1>
  

{/* // crud Buttons */}

<div  style={{marginBottom:20}}>
    <button onClick ={handleFetchUsers}>Get All Users</button>
</div>

{/* //form */}

<div style = {{display:"flex, gap:10,marginBottom:10"}}>
    <input
    name ="name"
    placeholder= "Name"
    value ={formData.name}
    onChange={handleChange}
    />
    <input
    name ="email"
    placeholder= "Email"
    value ={formData.email}
    onChange={handleChange}
    />
    <input
    name ="phone"
    placeholder= "Mobile"
    value ={formData.phone}
    onChange={handleChange}
    />

    {selectedId ? (
        <button onClick={handleUpdateUser}>Update User</button>
    ):(
        <button onClick = {handleAddUser}>AddUser</button>
    )}
</div>


  {/* //User table */}

  {users.length > 0 && (
      <table border ={1} cellPadding= {8} style = {{width:"100%"}}>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            {users.map((u)  => (
                <tr key = {u.id}>
                    <td>{u.id}</td>
                    <td>{u.name}</td>
                    <td>{u.email}</td>
                    <td>{u.phone}</td>

                    <td>
                        <button onClick={()=>handleEditClick(u)}>Edit</button>
                        <button onClick={()=>handleDeleteUser(u.id!)}>
                            Delete 
                        </button>
                    </td>
                </tr>

))}
        </tbody>
    </table>
  )}
</div>
)
};

export default CrudOperations;