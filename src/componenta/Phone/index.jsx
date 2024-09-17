import "./index.css";

function Phone(props) {
  const { phone, email } = props;
  console.log(email);
  return (
    <div className="phone">
      <h4>
        Phone: <span>{phone}</span>
      </h4>
      <h4>
        Email: <span>{email}</span>
      </h4>
    </div>
  );
}

export default Phone;
