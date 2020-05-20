import React from 'react';

class Preview extends React.Component{
  constructor(props) {
    super(props)
  }

  render() {
     return(
      <div>
          <div className="preview-text">This is my WebSite</div>
          <div className="preview-text-second">Where you can create todo list</div>
      </div>

    );
  }
   

};

export default Preview;