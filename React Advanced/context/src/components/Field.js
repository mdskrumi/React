import React from 'react';
import LanguageContext from './contexts/LanguageContext';



class Field extends React.Component {

    render() {
        console.log(this.context);
        return (
            <div className="ui field">
                <label>
                    <LanguageContext.Consumer >
                        {(value) => value}
                    </LanguageContext.Consumer></label>
                <input />
            </div>
        )
    }
}

export default Field;