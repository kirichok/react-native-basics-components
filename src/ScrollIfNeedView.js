import React, {Component} from 'react';
import {ScrollView, View} from 'react-native';
import {info} from "../utils/device";

export class ScrollIfNeedView extends Component {
    static defaultProps = {
        maxHeight: 0,
        backgroundColor: 'transparent',
    };

    state = {
        screenHeight: 0,
    };

    onContentSizeChange = (contentWidth, contentHeight) => {
        this.setState({screenHeight: contentHeight});
    };

    render() {
        const {maxHeight, backgroundColor, style, children, ...rest} = this.props;
        const styles = [{
            backgroundColor
        }, style];
        if (maxHeight) {
            styles[0].maxHeight = maxHeight
        }

        const scrollEnabled = this.state.screenHeight > info.height;

        return <View style={styles}>
            <ScrollView
                style={{flex: 1}}
                contentContainerStyle={{
                    flexGrow: 1
                }}
                scrollEnabled={scrollEnabled}
                onContentSizeChange={this.onContentSizeChange}
                {...rest}
            >
                <View style={{flex: 1}}>
                    {children}
                </View>
            </ScrollView>
        </View>
    }
}
