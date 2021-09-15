  
import React from "react";

function Heading({ children, title }) {
  return (
    <div>
      <div>
        <div>
          <div className="page">
            {title && (
              <>
                <h1 className="heading">{title}</h1>
                <hr />
              </>
            )}
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Heading;