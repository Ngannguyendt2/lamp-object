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
            //    alert("Lighting");
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
    let energyInput = document.getElementById('energy').value;
    let battery = new Battery();
    battery.setEnergy(energyInput);
    let flash = new flashLamp();
    flash.setBattery(battery);
    console.log(flash);
    let countEnergy = energyInput;
    let count=setInterval(function () {
        document.getElementById('lamp').innerHTML = 'Turn on <br/>';
        flash.turnOn();
        flash.light();
        document.getElementById('battery').innerHTML = countEnergy;
        battery.decreaseEnergy();
        countEnergy--;
        if(countEnergy<0)
        {
            document.getElementById('lamp').innerHTML = 'Turn off <br/>'
            flash.turnOff();
            flash.light();
            clearInterval(count);

        }
    },1000);

    //
}
