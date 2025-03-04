export default function Interests({ data, setData, errors }) {
  const { interests } = data;
  const clickHandler = (e) => {
    setData((prevState) => ({
      ...prevState,
      interests: e.target.checked
        ? [...prevState.interests, e.target.name]
        : prevState.interests.filter((i) => i != e.target.name),
    }));
  };

  return (
    <div>
      <div>
        <label>Cricket:</label>
        <input
          type="checkbox"
          name="cricket"
          onClick={clickHandler}
          checked={data.interests.includes("cricket")}
        />
      </div>
      <div>
        <label>Football:</label>
        <input
          type="checkbox"
          name="football"
          onClick={clickHandler}
          checked={data.interests.includes("football")}
        />
      </div>
      <div>
        <label>Hockey:</label>
        <input
          type="checkbox"
          name="hockey"
          onClick={clickHandler}
          checked={data.interests.includes("hockey")}
        />
      </div>
      {errors.interests && <span className="error">{errors.interests}</span>}
    </div>
  );
}
