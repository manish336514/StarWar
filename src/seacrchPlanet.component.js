import React from "react";

export default class SearchPlanet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            planetNumber: 2,
            data: [],
            attempts: 0
        };
    }

    handleChange = e => {
        this.setState({ planetNumber: e.target.value });
    };
    handleClcik = () => {
        console.log("planetNumber", this.state.planetNumber);
        let url = "https://swapi.co/api/planets/" + this.state.planetNumber;

        if (this.state.attempts < 16 && this.props.peopledata.name === "Luke Skywalker") {
            this.setState({ attempts: this.state.attempts + 1 })
            fetch(url)
                .then(response => response.json())
                .then(data => this.setState({ data: data }));
        }
        else {
            fetch(url)
            .then(response => response.json())
            .then(data => this.setState({ data: data }));
    }        
    }
    // let url =this.props.homeworld;


    render() {
        console.log("data in search planet", this.state.data);
        return (
            <div>
                {
                    this.state.attempts < 16 ? <div>Search Planet Number
          <input
                            type="text"
                            value={this.state.planetNumber}
                            onChange={this.handleChange}
                        ></input>
                        <button type="submit" onClick={this.handleClcik}>
                            Submit
          </button>
                        <br />
                        {this.props.peopledata.name === "Luke Skywalker"?<div>
                        Attemts No : {this.state.attempts} out of 15
                        </div>:<div>No attempt Limit</div>}

                        <div>
                            <div
                                style={{
                                    width: this.state.data.diameter / 85 + 150,
                                    backgroundColor: "cyan"
                                }}
                            >
                                Name: {this.state.data.name}
                            </div>
                            <div
                                style={{
                                    width: this.state.data.diameter / 85 + 150,
                                    backgroundColor: "cyan"
                                }}
                            >
                                Rotation Period: {this.state.data.rotation_period}
                            </div>
                            <div
                                style={{
                                    width: this.state.data.diameter / 85 + 150,
                                    backgroundColor: "cyan"
                                }}
                            >
                                Orbital Period: {this.state.data.orbital_period}
                            </div>
                            <div
                                style={{
                                    width: this.state.data.diameter / 85 + 150,
                                    backgroundColor: "cyan"
                                }}
                            >
                                Diameter: {this.state.data.diameter}
                            </div>
                            <div
                                style={{
                                    width: this.state.data.diameter / 85 + 150,
                                    backgroundColor: "cyan"
                                }}
                            >
                                Climate: {this.state.data.climate}
                            </div>
                        </div>

                    </div>
                        : <div>You have exeeded max Limit of 15</div>
                }
                            </div >
        );
    }
}