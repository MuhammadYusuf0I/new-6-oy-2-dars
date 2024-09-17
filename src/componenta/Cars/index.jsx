import "./index.css";

function Car(props) {
  const { car } = props;
  return (
    <div className="form-check car ">
      <input
        className="form-check-input fs-6"
        type="checkbox"
        value=""
        id="flexCheckDefault"
      />
      <label className="form-check-label fs-6" htmlFor="flexCheckDefault">
        {car}
      </label>
    </div>
  );
}

export default Car;
