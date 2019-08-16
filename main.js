
let Battery = function () {
    this.setEnergy = function (energy) {
        this.energy = energy;
    };
    this.getEnergy = function () {
        return this.energy;
    };
    this.decreaseEnergy = function () {
        if (this.energy > 0) {
            this.energy--;
        }
    }
}
let flashLamp = function () {
    this.setBattery = function (battery) {
        this.battery = battery;
    };

    this.getBatteryInfo = function () {
        return this.battery.getEnergy();
    };

    this.light = function () {
        if (this.status) {
           // alert("Lighting");
        } else {
          //  alert("Not lighting");
        }
    };

    this.turnOn = function () {
        this.status = true;
    };

    this.turnOff = function () {
        this.status = false;
    }
}

function flashlamp() {
    let density = document.getElementById('energy').value;
    let battery = new Battery();
    battery.setEnergy(density);
    let flash = new flashLamp();
    flash.setBattery(battery);
    for(let i=density;i>0;i--)
    {
        document.getElementById('lamp').innerHTML='Turn on <br/>';
        flash.turnOn();
        flash.light();
            document.getElementById('battery').innerHTML=i;
            setTimeout(1000);
        battery.decreaseEnergy();

    }
        document.getElementById('lamp').innerHTML='Turn off <br/>'
        flash.turnOff();
        flash.light();
}
