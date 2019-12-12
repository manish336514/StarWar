import React from "react";
import axios from "axios";
import SeacrchPlanet from "./seacrchPlanet.component";

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      color: "red",
      people: [
        "Luke Skywalker",
        "C-3PO",
        "R2-D2",
        "Darth Vader",
        "Leia Organa",
        "Owen Lars"
      ],
      suggestionpeople: [],
      peopleselected: "",
      peopletetaills: [],
      peoplelist: [
        {
          name: "Luke Skywalker",
          id: 1
        },
        {
          name: "C-3PO",
          id: 2
        },
        {
          name: "R2-D2",
          id: 3
        },
        {
          name: "Darth Vader",
          id: 4
        },
        {
          name: "Leia Organa",
          id: 5
        },
        {
          name: "Owen Lars",
          id: 6
        }
      ],
      filteredPeople: [],
      peopleid: 1,
      password: "",
      peopledata: [],
      loginStatus: false
      // loginStatus: true
    };
  }

  handleChange = e => {
    const invalue = e.target.value;
    this.setState({ peopleselected: invalue });
    let suggestion = [];
    if (invalue.length > 0) {
      const regex = new RegExp(`^${invalue}`, "i");
      suggestion = this.state.people.sort().filter(v => regex.test(v));
    }
    this.setState({ suggestionpeople: suggestion });
  };

  setInputValue = sug => e => {
    // let setInput = e.target.value;
    console.log("setInput", sug);
    this.setState({ peopleselected: sug });
  };

  handlepassword = e => {
    let pass = e.target.value;
    this.setState({ password: pass });
  };
  handleSubmit = () => {
    console.log("this.state.peoplelist", this.state.peoplelist);
    console.log("this.state.peopleselected", this.state.peopleselected);
    var ss = this.state.peopleselected;
    var filtered = this.state.peoplelist.filter(function(item) {
      return item.name === ss;
    });
    console.log("filtered", filtered[0].id);
    this.setState({ peopleid: filtered[0].id });
    this.setState({ filteredPeople: filtered });
    let url = "https://swapi.co/api/people/" + filtered[0].id + "/";
    console.log(url);
    var pdata = 22;
    axios(url).then(res => {
      console.log("data", res.data.birth_year);
      console.log("data", res.data);
      var newdatapass = res.data.birth_year;
      this.setState({ peopledata: res.data });
      if (newdatapass === this.state.password) {
        console.log("true");
        this.setState({ loginStatus: true });
      } else {
        this.setState({ loginStatus: false });
      }
      pdata = res.data.birth_year;
    });

    console.log("pdata", pdata);
    console.log("password", this.state.password);
  };

  render() {
    return (
      <div>
        {this.state.loginStatus === false ? (
          <div>
            Character:{" "}
            <input
              type="text"
              value={this.state.peopleselected}
              onChange={this.handleChange}
            ></input>
            {this.state.suggestionpeople.map(sug => {
              return (
                <ul>
                  <li onClick={this.setInputValue(sug)}>{sug}</li>
                </ul>
              );
            })}
            Password:{" "}
            <input
              type="password"
              value={this.state.password}
              onChange={this.handlepassword}
            ></input>
            <button type="submit" onClick={this.handleSubmit}>
              Submit
            </button>
          </div>
        ) : (
          <div>
            Loged In as{" "}
            <span style={{ color: "red" }}>{this.state.peopledata.name}</span>
            <br />
            {console.log("homeworld", this.state.peopledata)}
            <SeacrchPlanet peopledata={this.state.peopledata} />
          </div>
        )}
      </div>
    );
  }
}
