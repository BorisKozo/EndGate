/// <reference path="../../Scripts/endgate.ts" />
/// <reference path="Animation.ts" />

class ElectricPulse implements eg.IUpdateable extends Animation {
    constructor(x: number, y: number, onComplete: Function) {
        super("images/electric_pulse.png", x, y, 1152, 128, 128, 128, 20, 10, onComplete);
    }
}