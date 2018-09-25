import {Linking} from 'react-native';
import {info} from "./device";

export class Link {
    static async showAddressOnMap(fullAddress) {
        const url = 'http://maps.google.com/maps?q=' + encodeURIComponent(fullAddress);
        await Link.openUrl(url);
    }

    static async showDirectionOnMap(direction) {
        await Link.openUrl(direction.url);
    }

    static async showDirectionsToAddress(fullAddress, consideringPlatform = false) {
        const direction = new Dirrection();
        direction.daddr = fullAddress;
        direction.consideringPlatform = consideringPlatform;

        await Link.openUrl(direction.url);
    }

    static async openUrl(url) {
        if (await Linking.canOpenURL(url)) {
            await Linking.openURL(url);
        } else {
            throw new Error("Can't open url: " + url);
        }
    }
}


class Dirrection {
    params = {
        consideringPlatform: false,
        saddr: 'Current Location',
        daddr: '',
        directionsmode: 'driving',
        zoom: 17
    };

    set consideringPlatform(value) {
        if (typeof value !== 'boolean') {
            throw new Error('Wrong value type for consideringPlatform parameter. Must be boolean');
        }
        this.params.consideringPlatform = value;
    }

    get saddrCurrentLocation() {
        this.saddr = 'Current Location';
    }

    set saddr(value) {
        this.params.saddr = value;
    }

    set daddr(value) {
        this.params.daddr = value;
    }

    get directionsDriving() {
        this.directionsMode = 'driving';
    }

    get directionsWalking() {
        this.directionsMode = 'walking';
    }

    get directionsBicycling() {
        this.directionsMode = 'bicycling';
    }

    get directionsTransit() {
        this.directionsMode = 'transit';
    }

    set directionsMode(value) {
        this.params.directionsmode = value;
    }

    set zoom(value) {
        if (value < 1 && value > 20) {
            throw new Error('Direction zoom is not on range [1, 20]')
        }
        this.params.zoom = value;
    }

    get url() {
        const appleMapsLink = 'http://maps.apple.com/maps?';
        const googleMapsLink = 'http://maps.google.com/maps?f=d&';

        let url = this.params.consideringPlatform ? (info.isIOS ? appleMapsLink : googleMapsLink) : googleMapsLink;

        url += 'saddr=' + encodeURI(this.params.saddr) + '&';
        url += 'daddr=' + encodeURI(this.params.daddr) + '&';
        url += 'directionsmode=' + this.params.directionsmode + '&';
        url += 'zoom=' + this.params.zoom;

        return url;
    }
}
