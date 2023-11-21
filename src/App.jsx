import React, { Component} from 'react'
import './App.css'

class App extends Component {
  state = {
    person: {
      fullName: 'Adebayo Olanrewaju',
      bio: "I'm a Nigerian based front‑end developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.",
      imgSrc: '/poolImage2.jpg', 
      profession: 'Software Engineer',
    },
    show: false,
    mountTime: 0,
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        mountTime: prevState.mountTime + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };
  
  render () {
    const { person, show, mountTime } = this.state;
    return (
      <div>
        <button onClick={this.toggleShow}>Toggle Profile</button>
        {show && (
          <div>
            <h1>{person.fullName}</h1>
            <img src={person.imgSrc} alt={person.fullName} />
            <p>{person.bio}</p>
            <p>Profession: {person.profession}</p>
          </div>
        )}
        <p>Time since mount: {mountTime} seconds</p>
      </div>
    )
  }
}
export default App
