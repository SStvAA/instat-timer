const Tools = class {

    static formatElapsedTime(timeElapsed, returnString = false) {
        let miliseconds = timeElapsed / 1000;
        if (Number.isInteger(miliseconds) === false) {
            miliseconds = parseInt((timeElapsed / 1000).toString().split('.')[1].slice(0, 2));
        } else {
            miliseconds = 0;
        }
        const hours = Math.floor(timeElapsed / 1000 / 60 / 60);
        const minutes = Math.floor((timeElapsed / 1000 / 60 / 60 - hours) * 60);
        const seconds = Math.floor(((timeElapsed / 1000 / 60 / 60 - hours) * 60 - minutes) * 60);
        if (returnString === true) {
            const h = hours < 10 ? '0' + hours : hours;
            const m = minutes < 10 ? '0' + minutes : minutes;
            const s = seconds < 10 ? '0' + seconds : seconds;
            const ms = miliseconds < 10 ? '0' + miliseconds : miliseconds;

            if(hours === 0){
                return `${m}:${s}.${ms}`;
            }

            return `${h}:${m}:${s}.${ms}`;
        }

        return {
            ms: miliseconds,
            s: seconds,
            m: minutes,
            h: hours
        }
    }

}

const Configuration = class {

    constructor(component) {
        this.component = component;
        this.itemName = `${this.component}Config`;
    }

    get() {
        const configuration = localStorage.getItem(this.itemName);
        if (configuration === null) {
            throw 'no configuration saved';
        }
        return JSON.parse(configuration);
    }

    set(object) {
        if (typeof object !== 'object' || Object.keys(object).length === 0) {
            throw 'the provided value is not an object'
        }
        let configuration = JSON.parse(localStorage.getItem(this.itemName));
        if (configuration === null) {
            configuration = object;
        } else {
            configuration = Object.assign({}, configuration, object);
        }
        localStorage.setItem(this.itemName, JSON.stringify(configuration));

    }


}