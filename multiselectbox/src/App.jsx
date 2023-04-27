import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import SelectUser from "./components/SelectUser";


function App() {
  const [user, setUsers] = useState([]);

  useEffect(() => {
    getdata();
  }, []);

  const getdata = async () => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      const newdata = data?.map((item) => {
        return {
          ...item,
          checked: false,
        };
      });

      setUsers(newdata);
    } catch (error) {
      console.log(error);
    }
  };

  const onChange = (id) => {
    const newdata = user.map((user) => {
      if (user.id === id) {
        return {
          ...user,
          checked: !user.checked,
        };
      } else {
        return user;
      }
    });

    setUsers(newdata);
  };

  const handleSubmit = () => {
    const newarr = [];

    user.forEach((user) => {
      if (user.checked) {
        newarr.push(user.id);
      }
    });

    console.log("new",newarr)

    // const filteredarr = user.map((p)=>{
    //   if(p.checked){
    //     return p.id
    //   }

    // })
    // console.log(filteredarr);

  };



  return (
    <>
      <div style={{border:"3px solid red"}}>
        <button onClick={handleSubmit}>Submit</button>
        {user &&
          user.map((p) => (
            <>
              <div
                style={{ display: "flex", justifyContent: "space-between" }}
                key={p.id}
              >
                <div>{p.id}</div>
                <div>{p.name}</div>
                <div>{p.username}</div>
                <div>{p.website}</div>
                <input type="checkbox" checked={p.checked} onChange={() => onChange(p.id)} />
              </div>
            </>
          ))}
      </div>
      <SelectUser/>
    </>
  );
}

export default App;
