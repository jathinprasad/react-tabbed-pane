import { useState } from "react";
import Interests from "./Interests.js";
import Profile from "./Profile.js";
import Settings from "./Settings.js";

export default function TabForm({ data, setData }) {
  const [activeTab, setActiveTab] = useState(0);
  const [errors, setErrors] = useState({});
  const tabs = [
    {
      name: "Profile",
      component: Profile,
      validate: () => {
        const err = {};
        if (!data.name || data.name.length < 2) {
          err.name = "Invalid name";
        }
        if (!data.age || data.age < 18) {
          err.age = "Invalid age";
        }
        if (!data.email || data.email.length < 2) {
          err.age = "Invalid email";
        }
        setErrors(err);
        return err.name || err.email || err.age ? false : true;
      },
    },
    {
      name: "Interests",
      component: Interests,
      validate: () => {
        const err = {};
        if (data.interests.length < 1) {
          err.interests = "Select atleast one interest";
        }
        setErrors(err);
        return err.interests ? false : true;
      },
    },
    {
      name: "Settings",
      component: Settings,
      validate: () => {
        return true;
      },
    },
  ];

  const ActiveComponent = tabs[activeTab].component;

  const tabClickHandler = (i) => {
    if (tabs[activeTab].validate()) {
      setActiveTab(i);
    }
  };

  const prevHandler = () => {
    setActiveTab((prevState) => prevState - 1);
  };

  const nextHandler = () => {
    if (tabs[activeTab].validate()) {
      setActiveTab((prevState) => prevState + 1);
    }
  };

  const submitHandler = (e) => {
    //call API
    console.log(data);
  };

  return (
    <div>
      <div className="tabs-head">
        {tabs.map((t, i) => (
          <div className="tabs" onClick={() => tabClickHandler(i)} key={i}>
            {t.name}
          </div>
        ))}
      </div>
      <div className="tabs-body">
        <ActiveComponent data={data} setData={setData} errors={errors} />
      </div>
      <div className="button-hold">
        {activeTab != 0 && <button onClick={prevHandler}>Previous</button>}
        {activeTab != tabs.length - 1 && (
          <button onClick={nextHandler}>Next</button>
        )}
        {activeTab === tabs.length - 1 && (
          <button onClick={submitHandler}>Submit</button>
        )}
      </div>
    </div>
  );
}
