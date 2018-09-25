import React, {Component} from 'react';
import {keyboardEvents} from "./Events";
import {ScrollIfNeedView} from "../ScrollIfNeedView";

export class KeyboardAvoidingView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...keyboardEvents.dimensions
        };
        this.onChangeDimensions = this.onChangeDimensions.bind(this);

        keyboardEvents.addShowListener(this.onChangeDimensions);
        keyboardEvents.addHideListener(this.onChangeDimensions);
    }

    componentWillUnmount() {
        keyboardEvents.removeShowListener(this.onChangeDimensions);
        keyboardEvents.removeHideListener(this.onChangeDimensions);
    }

    onChangeDimensions(dimensions) {
        this.setState(dimensions);
    }

    render() {
        const {...rest} = this.props;
        const {keyboardHeight, screenHeight: {width, height}} = this.state;
        return <ScrollIfNeedView maxHeight={height} {...rest}/>
    }
}

