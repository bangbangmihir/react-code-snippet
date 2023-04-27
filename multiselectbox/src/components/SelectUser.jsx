import { useEffect, useState } from "react";

import axios from "axios";

const SelectUser = () => {
  const [user, setUsers] = useState([]);
  const [selectedboxdata, setselectedboxdata] = useState([]);

  useEffect(() => {
    getdata();
  }, []);

  const getdata = async () => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  const onChange = (id) => {
    if (selectedboxdata.includes(id)) {
      setselectedboxdata((boxdata) => boxdata.filter((p) => p !== id));
    } else {
      setselectedboxdata((boxdata) => [...boxdata, id]);
    }
  };

  const handleSubmit = () => {
    console.log("selectedboxdata", selectedboxdata);
  };

  return (
    <>
      <div style={{ border: "5px solid gray" }}>
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
                <input
                  type="checkbox"
                  checked={p.checked}
                  onChange={() => onChange(p.id)}
                />
              </div>
            </>
          ))}
      </div>
    </>
  );
};

export default SelectUser;
