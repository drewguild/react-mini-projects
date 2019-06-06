'use strict';

const e = React.createElement;

class SocialCard extends React.Component {
  render() { 
    return e('div');
  };
};

const domContainer = document.querySelector('#social-card-container');
ReactDOM.render(e(SocialCard), domContainer);