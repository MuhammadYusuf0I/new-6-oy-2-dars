import User from "../Users";
import "./index.css";

function UserList(props) {
  const { data } = props;

  return (
    <div className="userList ">
      {data.length > 0 &&
        data.map(function (el, index) {
          return <User user={el} key={index}></User>;
        })}
    </div>
  );
}

export default UserList;
