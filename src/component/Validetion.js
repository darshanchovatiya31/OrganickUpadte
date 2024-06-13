import React, { useState } from "react";

function Validetion() {
  const [first, setfirst] = useState("");
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [area, setarea] = useState("");
  const [birth, setbirth] = useState("");
  const [gender, setgender] = useState("");
  const [hobby, sethobby] = useState(0);

  const heandelsubmit = (e) => {
    if (first === "") {
      e.preventDefault();
      alert("enter your name");
      return false;
    }
    if (email === "") {
      e.preventDefault();
      alert("enter your email");
      return false;
    }
    if (pass === "") {
      e.preventDefault();
      alert("enter your pasword");
      return false;
    }
    if (area === "") {
      e.preventDefault();
      alert("enter your revyu");
      return false;
    }
    if (birth === "") {
      e.preventDefault();
      alert("enter your birth");
      return false;
    }
    if (gender === "") {
      e.preventDefault();
      alert("select your gender");
      return false;
    }
    if (hobby < 3) {
      e.preventDefault();
      alert("select mim 3 hobby");
      return false;
    }
  };
  return (
    <div>
      <form
        action=""
        style={{
          border: "2px solid black",
          width: "400px",
          padding: "20px",
          margin: "100px auto",
          backgroundColor: "skyblue",
        }}
      ><br /><br />
        Name :<input type="text" onChange={(e) => setfirst(e.target.value)} /><br /><br />
        Email :{" "}
        <input type="email" onChange={(e) => setemail(e.target.value)} /><br /><br />
        Password :{" "}
        <input type="password" onChange={(e) => setpass(e.target.value)} /><br /><br />
        Textarea :{" "}
        <textarea onChange={(e) => setarea(e.target.value)}></textarea><br /><br />
        Birth : <input type="date" onChange={(e) => setbirth(e.target.value)} /><br /><br />
        Gender : Male{" "}
        <input type="radio" name="radio" onChange={(e) => setgender(e.target.value)}/>
        Female{" "}
        <input type="radio" name="radio" onChange={(e) => setgender(e.target.value)}/><br /><br />
        Hobby : <br />
        Cricket{" "}
        <input type="checkbox" onChange={(e) => e.target.checked === true ? sethobby(hobby + 1) : sethobby(hobby - 1)}/>
        hokki{" "}
        <input type="checkbox" onChange={(e) => e.target.checked === true ? sethobby(hobby + 1) : sethobby(hobby - 1)}/>
        Football{" "}
        <input type="checkbox" onChange={(e) => e.target.checked === true ? sethobby(hobby + 1) : sethobby(hobby - 1)}/>
        kho kho{" "}
        <input type="checkbox" onChange={(e) => e.target.checked === true ? sethobby(hobby + 1) : sethobby(hobby - 1)}/>
        kabaddi{" "}
        <input type="checkbox" onChange={(e) => e.target.checked === true ? sethobby(hobby + 1) : sethobby(hobby - 1)}/>
        <input type="submit" onClick={(e) => heandelsubmit(e)} />
      </form>
    </div>
  );
}
export default Validetion;