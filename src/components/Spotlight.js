import React from 'react';
import PropTypes from 'prop-types';

export default class Spot extends React.Component {

  constructor(props) {
    super(props);
    this.state = { x: 0, y: 0};
  }

  componentDidMount(){
    window.addEventListener("mousemove", (e) => this._onMouseMove(e));
  

   }

  _onMouseMove(e) {
    this.setState({ x: e.pageX, y: e.pageY });

    
  }

   componentWillUnmount(){
    window.removeEventListener("mousemove", (e) => this._onMouseMove(e));
  

   }

  render() {
    const { x, y } = this.state;
    return (
       <div className={'spot'} style={{background: `radial-gradient(${this.props.height}px ${this.props.width}px at ${x}px ${y}px , transparent 90%, ${this.props.color})`, top: '0', bottom: '0', left: '0', right: '0', position: 'fixed', pointerEvents: 'none'}}> 
         </div>
    );
  }
}


Spot.propTypes = {

  height: PropTypes.number,
  width: PropTypes.number,
  color: PropTypes.string
}

