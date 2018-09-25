import React, {Component} from 'react';
import {View} from 'react-native';
import {dimensions} from "../utils/device";
import {KeyboardAvoidingView} from "./Keyboard/AvoidingView";

export class Screen extends Component {
    static navigatorStyle = {
        navBarHidden: true,
    };

    static defaultProps = {
        backgroundColor: '#fff',
    };

    constructor(props) {
        super(props);
        this.navigator = new NavigatorManager(props);

        this.renderBackground = this.renderBackground.bind(this);
        this.renderHeader = this.renderHeader.bind(this);
        this.renderContent = this.renderContent.bind(this);
        this.renderFooter = this.renderFooter.bind(this);
    }

    componentDidMount() {
        this.navigator.callOnDidMount();
    }

    renderHeader() {
        return null
    }

    renderFooter() {
        return null
    }

    renderBackground() {
        return null
    }

    renderContent() {
        return null
    }

    render() {
        const {backgroundColor} = this.props;
        const {width, height} = dimensions;
        return <View style={{backgroundColor, width, height}}>
            <View style={{position: 'absolute', left: 0, top: 0, height, width}}>
                {this.renderBackground()}
            </View>
            {this.renderHeader()}
            <KeyboardAvoidingView>
                {children}
            </KeyboardAvoidingView>
            {this.renderFooter()}
        </View>
    }
}
