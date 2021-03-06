var EndGate;
(function (EndGate) {
    (function (Collision) {
        /// <reference path="../Assets/Vectors/Vector2d.ts" />
        /// <reference path="Collidable.ts" />
        (function (Assets) {
            /**
            * Defines a data object that is used to describe a collision event.
            */
            var CollisionData = (function () {
                /**
                * Creates a new instance of the CollisionData object.
                * @param at Initial value of the At component of CollisionData.
                * @param w Initial value of the With component of CollisionData.
                */
                function CollisionData(at, w) {
                    this.At = at;
                    this.With = w;
                }
                return CollisionData;
            })();
            Assets.CollisionData = CollisionData;
        })(Collision.Assets || (Collision.Assets = {}));
        var Assets = Collision.Assets;
    })(EndGate.Collision || (EndGate.Collision = {}));
    var Collision = EndGate.Collision;
})(EndGate || (EndGate = {}));
