import React from 'react';
import { Button } from 'react-native';

ButtonMsx3 = (props) => {

    return (
        <Button
            title={"Press me functionnal"}
            onPress={props.handler}
        />
    );

}

export default ButtonMsx3;