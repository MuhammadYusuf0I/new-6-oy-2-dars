import data from "./assets/data/data.json";
import UserList from "./componenta/UserList";


function App() {
  return (
    <>
      <UserList data= {data}></UserList>
    </>
  );
}

export default App;
