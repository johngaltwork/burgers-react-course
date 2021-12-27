import React from 'react';
import restaurants from '../sample-restaurants';

class Landing extends React.Component {
  state = {
    display: false,
    title: '',
    url: '',
  };

  displayList = () => {
    const { display } = this.state;
    this.setState({ display: !display });
  };

  getTitle = (restaurant) => {
    const { title, url } = restaurant;
    this.setState({ title, url, display: false });
  };

  gotToRestaurant = () => {
    const { url } = this.state;
    this.props.history.push(`/restaurant/${url}`);
  };

  render() {
    return (
      <div className="restautant_select">
        <div className="restautant_select_top">
          <div
            onClick={this.displayList}
            className="restautant_select_top-header font-effect-outline"
          >
            {this.state.title ? this.state.title : 'Выбери ресторан'}
          </div>
          <div className="arrow_picker">
            <div className="arrow_picker-up"></div>
            <div className="arrow_picker-down"></div>
          </div>
        </div>

        {this.state.display ? (
          <div className="restautant_select_bottom">
            <ul>
              {restaurants.map((restaurant) => {
                return (
                  <li
                    onClick={() => this.getTitle(restaurant)}
                    key={restaurant.id}
                  >
                    {restaurant.title}
                  </li>
                );
              })}
            </ul>
          </div>
        ) : null}

        {this.state.title && !this.state.display ? (
          <button onClick={this.gotToRestaurant}>Перейти в ресторан</button>
        ) : null}
      </div>
    );
  }
}

export default Landing;
