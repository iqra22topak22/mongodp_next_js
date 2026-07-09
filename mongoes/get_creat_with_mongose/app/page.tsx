"use client";

import { useState , useEffect} from "react";
 
export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([])

// get users logic
const fatchUser = async ()=>{
const req = await fetch("/api/user");
const data = await req.json();
setUsers((data.data))
console.log(data)
}

// load data
useEffect(()=>{
  fatchUser()
},[])

// create user logic
  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email }),
    });

    const data = await res.json();
    console.log(data);

    alert("User created successfully");

    setName("");
    setEmail("");
  };

  return (
    <div>
      <h1>Create User</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br />
        <br />

        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br />
        <br />

        <button type="submit">Create User</button>
      </form>

      <hr />

      <h2> users lists</h2>
      {
        users.map((user) => (
          <div key={user._id}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </div>
        ))
      }
    </div>
  );
}