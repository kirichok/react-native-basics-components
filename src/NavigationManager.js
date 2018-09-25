class NavigatorManager {
    constructor(props) {
        this.props = props;
        this.nextScreen = this.nextScreen.bind(this);
        this.nextScreenModal = this.nextScreenModal.bind(this);
        this.prevScreen = this.prevScreen.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.callOnDidMount = this.callOnDidMount.bind(this);
    }

    _preparePassProps = (screen, props, prevScreen, callOnDidMount) => {
        const passProps = {
            ...props,
            screenId: screen,
            prevScreen
        };

        if (callOnDidMount) {
            passProps.callOnDidMount = () => {
                console.log('CALL ON COMPONENT DID MOUNT');
                typeof callOnDidMount === 'function' && callOnDidMount();
            }
        }

        return passProps;
    };

    nextScreen(screen, props, callOnDidMount) {
        this.props.navigator.push({
            screen,
            passProps: this._preparePassProps(screen, props, () => {
                this.props.navigator.pop({
                    animationType: 'fade'
                });
            }, callOnDidMount),
            animationType: 'fade'
        });
    };

    nextScreenModal(screen, props, callOnDidMount) {
        this.props.navigator.showModal({
            screen,
            passProps: this._preparePassProps(screen, props, () => {
                this.props.navigator.dismissModal({
                    animationType: 'fade'
                });
            }, callOnDidMount),
            animationType: 'fade'
        });
    }

    prevScreen() {
        typeof this.props.prevScreen === 'function' && this.props.prevScreen();
    };

    closeModal() {
        this.props.navigator.dismissModal({
            animationType: 'fade'
        });
    };

    callOnDidMount() {
        typeof this.props.callOnDidMount === 'function' && this.props.callOnDidMount();
    }
}
