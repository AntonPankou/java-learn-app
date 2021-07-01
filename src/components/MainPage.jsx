import React from 'react';

export class MainPage extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            prop: 42
        };
    };

    render() {
        return (
            <h1>Fuck you!</h1>
        )
    }
};
