import React, { Component } from 'react';
import { Button } from 'react-native';

class ButtonMsx2 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() { 
        return ( 
            <Button
            title={"Press me Class"}
            onPress={this.props.handler}
            />
         );
    }
}
 
export default ButtonMsx2;