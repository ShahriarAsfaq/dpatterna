interface ICommand {

    execute(): string

}


export class Light {

    public on(): string {
        return 'on'
    }

    public off(): string {
        return 'off'
    }
    public setRed(): string {
        return 'Red'
    }
}

export class RedLight {
    brightness: number = 0;

    public increaseLuminosity(): string {
        this.brightness++;
        if(this.brightness<=3){
        return this.brightness.toString()
        }
        else{
            return "Full Brightness"
        }
    }

    public decreaseLuminosity(): string {
        this.brightness--;
        if(this.brightness>=0){
        return this.brightness.toString()
        }
        else{
            return "The light is Dim"
        }
    }
}

export class LightOnCommand implements ICommand {

    private light: Light

    constructor(light: Light) {
        this.light = light;
    }

    execute(): string {
        return this.light.on();
    }


}

export class LightOffCommand implements ICommand {
    private light: Light

    constructor(light: Light) {
        this.light = light
    }

    execute(): string {
        return this.light.off()
    }

}

export class SetRedLightCommand implements ICommand {
    private light: Light

    constructor(light: Light) {
        this.light = light
    }

    execute(): string {
        return this.light.setRed()
    }

}


export class RedLightIncreaseLuminosity implements ICommand {
    redlight: RedLight;

    constructor(redlight: RedLight) {
        this.redlight = redlight;
    }

    execute(): string {
        return this.redlight.increaseLuminosity()
    }

}

export class RedLightDecreaseLuminosity implements ICommand {
    redlight: RedLight;

    constructor(redlight: RedLight) {
        this.redlight = redlight;
    }

    execute(): string{
        return  this.redlight.decreaseLuminosity()
    }

}


export class Invoker {
    on : ICommand
    off : ICommand
    plus : ICommand
    minus : ICommand
    red : ICommand

    constructor(on : ICommand,off : ICommand,plus : ICommand,minus : ICommand,red: ICommand){
        this.on=on
        this.off=off
        this.plus=plus
        this.minus=minus
        this.red=red
    }
clickon(){
    return this.on.execute();
}
clickoff(){
    return this.off.execute();
}
clickplus(){
   return this.plus.execute();
}
clickminus(){
   return this.minus.execute();
}
clickred(){
   return this.red.execute();
}


}