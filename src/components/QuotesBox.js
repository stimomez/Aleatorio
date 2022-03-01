//rsc
import quotes from '../quotes.json'


const QuotesBox = ({messageOne, color}) => {

    return (
        <div className='messageOne' >
          <p style={{color: color}} ><i className="fa-solid fa-quote-left"></i>{messageOne}</p>
                   
        </div>
    );
};

export default QuotesBox;