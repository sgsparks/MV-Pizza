import React from 'react';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  componentDidMount() {
    this.postCookie('chocchip', 'chewy')
  }

  postCookie(flavor, texture) {
    axios.post(`api/cookies/${flavor}/${texture}`)
      .then(() => {
        console.log('successfully posted', flavor, texture)
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        test
      </div>
    )
  }
}

export default App;