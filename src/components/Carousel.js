import { Component } from 'react';

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = { active: 0 };
  }

  static defaultProps = {
    images: ["http://pets-images.dev-apis.com'pets/none.jpg"],
  };

  handleIndexClick = (e) => {
    this.setState({
      active: Number(e.target.dataset.index),
    });
  };

  render() {
    const { active } = this.state;
    const { images } = this.props;

    return (
      <div className="carousel">
        <img src={images[active]} alt="animal" />
        <div className="carousel-smaller">
          {images.map((photo, ind) => (
            <img
              onClick={this.handleIndexClick}
              data-index={ind}
              key={photo}
              src={photo}
              alt={photo}
              className={ind === active ? 'active' : ''}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
