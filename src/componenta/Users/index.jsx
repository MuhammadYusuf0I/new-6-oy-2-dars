import Car from "../Cars";
import Address from "../Address";
import Phone from "../Phone";
import "./index.css";

function User(props) {
  const { firstName, lastName, image, cars, address, email, phone } =
    props.user;

  return (
    <div className="user">
      <img src={image} alt="" />
      <div className="user-card">
        <div className="user-firetName">
          <h4>
            {firstName} {lastName}
          </h4>
        </div>
        <div className="user-cars">
          {cars.length > 0 &&
            cars.map(function (el, index) {
              return <Car car={el} key={index}></Car>;
            })}
          {cars.length == 0 && <p> The car is not available</p>}
        </div>
      </div>
      <div className="phones">
        <Address add={address}></Address>
      </div>
      <div className="phones">
        <Phone phone={phone} email={email}></Phone>
      </div>
    </div>
  );
}

export default User;
