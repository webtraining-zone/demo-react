import React from "react";
import axios from "axios";
import "./Talks.css";

class Talks extends React.Component {
  state = {talks: []};

  render() {
    const {talks} = this.state;

    return <div className="container">

      <div className="content">
        <h1>Talks</h1>
      </div>

      <div className="columns is-multiline">

        {
          talks.map(talk =>
              <div
                  className="column is-one-quarter-desktop is-one-third-tablet">
                <div className="b-talk" key={talk.id}>
                  <div className="b-talk__image">
                    <img src={"http://conference.webtraining.fun/" +
                    talk.thumbnail}
                         alt=""/>
                  </div>
                  <div className="b-talk__title-container">
                    <a href="#" className="b-talk__title-link">
                      <h2 className="b-talk__title-text">{talk.title}</h2>
                    </a>
                  </div>
                  <div className="b-talk__summary">
                    {talk.summary}
                  </div>
                </div>
              </div>,
          )
        }
      </div>
    </div>;
  }

  componentDidMount() {
    const serviceURL = "http://conference.webtraining.fun/api/talks/";

    axios.get(serviceURL).then(
        response => {
          this.setState({
            talks: response.data,
          });
        },
    );
  }

}

export default Talks;
