export default function Settings({ data, setData }) {
  const clickHandler = (e) => {
    setData((prevState) => {
      return {
        ...prevState,
        ["theme"]: e.target.name,
      };
    });
  };

  return (
    <div>
      <h3>Theme: </h3>
      <div>
        <label>Dark:</label>
        <input
          type="radio"
          name="light"
          onClick={clickHandler}
          checked={data.theme === "light"}
        />
      </div>
      <div>
        <label>Light:</label>
        <input
          type="radio"
          onClick={clickHandler}
          name="dark"
          checked={data.theme === "dark"}
        />
      </div>
    </div>
  );
}
