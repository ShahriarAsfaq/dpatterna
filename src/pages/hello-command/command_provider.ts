import {
    Light,
    RedLight,
    LightOnCommand,
    LightOffCommand,
    SetRedLightCommand,
    RedLightIncreaseLuminosity,
    RedLightDecreaseLuminosity,
    Invoker
  } from "patterns/command/command";

const light = new Light();
const lightOn = new LightOnCommand(light);
const lightOff = new LightOffCommand(light);
const setRedLight = new SetRedLightCommand(light);

const redLight = new RedLight();
const lightIncreased=new RedLightIncreaseLuminosity(redLight);
const lightDecreased=new RedLightDecreaseLuminosity(redLight);

const invoker = new Invoker(lightOn,lightOff,lightIncreased,lightDecreased,setRedLight);
  
  function orderHandler(selected: string) {
    switch (selected) {
      case "On":
        return invoker.clickon();
        break;
      case "Off":
        return invoker.clickoff();
        break;
      case "RedLight":
        return invoker.clickred();
        break;
      case "Increase":
            return invoker.clickplus();
            break;
      case "Decrease":
                return invoker.clickminus();
                break;
      default:
      // code block
    }
  }
  
  export function remoteSwitch(selected: string) {
    const rswitch = orderHandler(selected);
    return rswitch;
  }
  