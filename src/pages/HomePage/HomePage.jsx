import {Component} from 'react';
import './HomePage.css';

class HomePage extends Component {


  componentWillMount() {

    const pictureArray = ['https://i.imgur.com/kr9zzxh.jpg', 
                          'https://i.imgur.com/obpyB6j.jpg',
                          'https://i.imgur.com/PqCtiJS.jpg',
                          'https://i.imgur.com/hEus9ss.jpg'
                        ];
    const randomIndex = Math.floor(Math.random() * pictureArray.length);
    const selectedPicture = pictureArray[randomIndex];

    this.setState({
      bgStyle: {
        backgroundImage: `url(${selectedPicture})`,
        height: "100vh",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }
    })

  }

  render() {
    return(
      <div className="HomeTitle" style={this.state.bgStyle}>
        <h1 className="animate__animated animate__zoomInLeft">Start exploring!</h1>
      </div>
    );
  }
  
}

export default HomePage;