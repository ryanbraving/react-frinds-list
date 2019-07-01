import React from "react";
import "./App.css";

const App = () => <PersonList />;

const PersonList = () => {
  const people = [
    {
      img: 22,
      name: "john",
      job: "developer"
    },
    {
      img: 60,
      name: "bob",
      job: "designer"
    },
    {
      img: 15,
      name: "peter",
      job: "artist"
    }
  ];
  return (
    <section>
      <Person person={people[0]} />
      <Person person={people[1]}>
        Veniam deserunt aliqua ut deserunt aute deserunt voluptate. Irure
        incididunt id velit fugiat irure ex adipisicing in. Aliqua et
        exercitation consequat in anim dolore excepteur reprehenderit. Elit
        eiusmod exercitation labore sint magna laborum laborum est eu irure
        commodo ea.
      </Person>
      <Person person={people[2]} />
    </section>
  );
};

const Person = props => {
  const { img, name, job } = props.person;
  const { children } = props;
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return (
    <div className="person">
      <img src={url} alt="" />
      <div>
        <h4>{name}</h4>
        <h4>{job}</h4>
        {children}
      </div>
    </div>
  );
};

export default App;
