// Wrap in module to keep code out of global scope, misspelling of Texts is purposeful to avoid namespace conflict
module Texts {

    export class CustomSlider {

        constructor(private _target: any, private _min: number, private _max: number, private _defaultValue: number, private _onSliderChange: Function) {
            var sliderChange = () => {
                this.SliderChange();
            };

            // Build slider with default values
            this._target.slider({
                orientation: "horizontal",
                range: "min",
                min: this._min,
                max: this._max,
                value: this._defaultValue,
                animate: true,
                slide: sliderChange,
                change: sliderChange
            });

            // This essentially triggers the onSliderChange event with the default values
            this.SliderChange();
        }

        // Take an outside value and update the slider (this is used for things like animating)
        public UpdateSlider(val: number): void {
            this._target.slider("value", val);
        }

        private SliderChange(): void {
            this._onSliderChange(parseInt(this._target.slider("value")));
        }
    }

}