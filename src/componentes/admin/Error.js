import React from 'react';

const Error = ({mensaje}) => {
    return ( 
        <div className="alert alert-danger Error" role="alert">
            {mensaje}
        </div>

     );
}
 
export default Error;