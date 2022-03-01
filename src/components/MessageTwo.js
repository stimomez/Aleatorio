import React from 'react';

const MessageTwo = ({messageTwo, color}) => {
    return (
        <div >
           <p style={{color: color}} className='messageTwo'>{messageTwo}</p>   
        </div>
    );
};

export default MessageTwo;