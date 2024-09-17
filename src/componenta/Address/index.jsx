import "./index.css";

function Address(props) {
  const { region, zip } = props.add;
  return (
    <div className="address">
      <h3>
        Region: <span>{region}</span>
      </h3>
      <h3>
        Location: <span>{zip}</span>
      </h3>
    </div>
  );
}

export default Address;
