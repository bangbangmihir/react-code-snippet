import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

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
      <div style={{}}>
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
    </>
  );
}

export default App;
