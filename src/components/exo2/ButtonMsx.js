import React, { Component } from 'react';
import { Button } from 'react-native';

class ButtonMsx extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Button
            title={"Press me"}
            onPress={this.props.changeIcon}
            />
         );
    }
}
 
export default ButtonMsx;