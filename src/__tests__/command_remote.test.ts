import {} from "../patterns/command/command";
import {remoteSwitch} from "../pages/hello-command/command_provider"

describe("Sudo Remote", () => {
    test('Click on',()=>{
        let button_func=remoteSwitch('On')
        
        expect(button_func).toEqual("on")
    })
    test('Set red light',()=>{
        let button_func=remoteSwitch('RedLight')
        expect(button_func).toEqual("red")
    })
    test('increase brightness',()=>{
        let button_func=getIcecream('Increase')
        expect(button_func).toEqual("1")
    })
    test('Decrease brightness',()=>{
        let button_func=getIcecream('Decrease')
        expect(button_func).toEqual("0")
    })
    test('click off',()=>{
        let button_func=getIcecream('Off')
        expect(button_func).toEqual("off")
    })
})