import {Keyboard as RNKeyboard, StatusBar} from 'react-native';
import EventEmitter from 'events';
import {info, dimensions} from "../../utils/device";

const EVENT_SHOW = info.isAndroid ? 'keyboardDidShow' : 'keyboardWillShow',
    EVENT_HIDE = info.isAndroid ? 'keyboardDidHide' : 'keyboardWillHide';

class KeyboardEvents {
    constructor() {
        this._height = 0;
        this._eventEmiter = new EventEmitter();

        this.addListener = this.addListener.bind(this);
        this.addShowListener = this.addShowListener.bind(this);
        this.addHideListener = this.addHideListener.bind(this);
        this.removeListener = this.removeListener.bind(this);
        this.removeShowListener = this.removeShowListener.bind(this);
        this.removeHideListener = this.removeHideListener.bind(this);
        this._onShowEvent = this._onShowEvent.bind(this);
        this._onHideEvent = this._onHideEvent.bind(this);

        RNKeyboard.addListener(EVENT_SHOW, this._onShowEvent);
        RNKeyboard.addListener(EVENT_HIDE, this._onHideEvent);
    }

    get dimensions() {
        const {height, width} = dimensions;
        return {
            keyboardHeight: this._height,
            screenHeight: {
                width,
                height: height - this._height - (info.isAndroid ? StatusBar.currentHeight : 0)
            }
        }
    }

    addListener(eventName, handle) {
        this._eventEmiter.addListener(eventName, handle);
    }

    addShowListener(handle) {
        this.addListener(EVENT_SHOW, handle);
    }

    addHideListener(handle) {
        this.addListener(EVENT_HIDE, handle);
    }

    removeListener(eventName, handle) {
        this._eventEmiter.removeListener(eventName, handle);
    }

    removeShowListener(handle) {
        this.removeListener(EVENT_SHOW, handle);
    }

    removeHideListener(handle) {
        this.removeListener(EVENT_HIDE, handle);
    }

    _onShowEvent({endCoordinates: {height}}) {
        this._height = height;
        this._eventEmiter.emit(EVENT_SHOW, this.dimensions);
    }

    _onHideEvent() {
        this._height = 0;
        this._eventEmiter.emit(EVENT_HIDE, this.dimensions);
    }
}

export const keyboardEvents = new KeyboardEvents();
