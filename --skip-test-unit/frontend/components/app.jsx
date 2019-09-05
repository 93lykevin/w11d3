import React from 'react';

export class App extends React.Component { 
  constructor(props) {
    super(props);
    console.log(props);
  }
  
  render() {
    console.log(this.props);
    return (
      <div>
        <p>
          BenchBnB App
        </p>
      </div>  
    );
  }  
};