export default function Profile({ data, setData, errors }) {
  const { name, email, age } = data;
  const onChangeHandler = (e) => {
    setData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          onChange={onChangeHandler}
          value={name}
        />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="text"
          name="email"
          onChange={onChangeHandler}
          value={email}
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      <div>
        <label>Age:</label>
        <input
          type="number"
          name="age"
          onChange={onChangeHandler}
          value={age}
        />
        {errors.age && <span className="error">{errors.age}</span>}
      </div>
    </div>
  );
}
