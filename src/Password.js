import React, { Component } from "react";

class Password extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    fetch("https://randomuser.me/api/?password=CHARSETS,MAX_LENGTH")
    .then(res => res.json())
    .then(parsedJSON => parsedJSON.results.map(data => (
      {
        id: `${data.id.name}`,
        firstName: `${data.name.first}`,
        lastName: `${data.name.last}`,
        email: `${data.email}`,
        username: `${data.login.username}`,
        password: `${data.login.password}`,
        thumbnail: `${data.picture.large}`,
      }
    )))
    .then(items => this.setState({
      items,
      isLoaded: false
    }))
    .catch(error => console.log('parsing failed', error))
  }

  render() {
    const {items} = this.state;
    return (
      <div className="boxWhite">
        {
          items.length > 0 ? items.map(item => {
            const {id, firstName, lastName, email, thumbnail, username,password} = item;
            return (
              <div key={id} className="bgCircle">
                <center><img src={thumbnail} alt={firstName} className="circle"/> </center><br />
                <div className="ctr">
                {firstName} {lastName}<br />
                  {email}<br/>
                  {username}<br/>
                  {password}
                </div>

              </div>
            );
          }) : null
        }
      </div>
    );
  }
}

export default Password;