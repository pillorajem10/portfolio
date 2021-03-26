import React from 'react';

const Page = (props) => {
  return (
    <>
      <div className="main-container">
        <div className="default-container">
          <div>404</div>
          <div>Sorry but</div>
          <div style={{color: "red"}} >{props.location.pathname}</div>
          <div>Can't found</div>
        </div>
      </div>
    </>
  )
}

export default Page;
