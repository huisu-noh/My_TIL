const rootElement = document.getElementById("root");

const ID = (handleIdChange) => {
  return (
    <>
      <label>ID: </label>
      <input onchange={handleIdChange}></input>
    </>
  );
};
const Password = (handlePasswordChange) => {
  return (
    <>
      <label>Password: </label>
      <input type="password" onchange={handlePasswordChange}></input>
    </>
  );
};

const App = () => {
  const [id, setId] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleIdChange = (event) => {
    setId(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLoginClick = () => {
    alert(`id: ${id}, pw: ${password}`);
  };

  return (
    <>
      <ID handleIdChange={handleIdChange}></ID>
      <br />
      <Password handlePasswordChange={handlePasswordChange}></Password>
      <button disabled={id.length === 0 || password.length === 0} onClick={handleLoginClick}>
        Login
      </button>
    </>
  );
};

React.render(<App />, rootElement);
