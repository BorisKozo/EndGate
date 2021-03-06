/// <reference path="ITweeningFunction.ts" />

module EndGate.Tweening.Functions {

    /**
    * Defines a Quartic tweening function collection that has an EaseIn, EaseOut, and EaseInOut function that can be used with Tween's.
    */
    export class Quartic {
        private static _easeIn: ITweeningFunction = (from: number, to: number, elapsed: TimeSpan, duration: TimeSpan): number => {
            var change = to - from,
                elapsedMilliseconds = elapsed.Milliseconds;

            return change * (elapsedMilliseconds /= duration.Milliseconds) * elapsedMilliseconds * elapsedMilliseconds * elapsedMilliseconds + from;
        };
        private static _easeOut: ITweeningFunction = (from: number, to: number, elapsed: TimeSpan, duration: TimeSpan): number => {
            var change = to - from,
                elapsedMilliseconds = elapsed.Milliseconds;

            return -change * ((elapsedMilliseconds = elapsedMilliseconds / duration.Milliseconds - 1) * elapsedMilliseconds * elapsedMilliseconds * elapsedMilliseconds - 1) + from;
        };
        private static _easeInOut: ITweeningFunction = (from: number, to: number, elapsed: TimeSpan, duration: TimeSpan): number => {
            var change = to - from,
                elapsedMilliseconds = elapsed.Milliseconds;

            if ((elapsedMilliseconds /= duration.Milliseconds / 2) < 1)
            {
                return change / 2 * elapsedMilliseconds * elapsedMilliseconds * elapsedMilliseconds * elapsedMilliseconds + from;
            }
            return -change / 2 * ((elapsedMilliseconds -= 2) * elapsedMilliseconds * elapsedMilliseconds * elapsedMilliseconds - 2) + from;
        };

        /**
        * Gets the Quartic EaseIn function.
        */
        public static get EaseIn(): ITweeningFunction {
            return Quartic._easeIn;
        }

        /**
        * Gets the Quartic EaseOut function.
        */
        public static get EaseOut(): ITweeningFunction {
            return Quartic._easeOut;
        }

        /**
        * Gets the Quartic EaseInOut function.
        */
        public static get EaseInOut(): ITweeningFunction {
            return Quartic._easeInOut;
        }
    }

}