/// <reference path="../../Assets/Vectors/Vector2d.ts" />
/// <reference path="../../Graphics/Graphic2d.ts" />
/// <reference path="../../Graphics/Sprites/ImageSource.ts" />

module EndGate.Map {

    /**
    * Defines an abstract class TileMap that takes an array of resources to be mapped to tiles.
    */
    export class TileMap extends Graphics.Abstractions.Graphic2d {
        public _Resources: Graphics.Assets.ImageSource[];

        /**
        * Creates a new instance of the TileMap object.
        * @param x Initial horizontal location of the tile map.
        * @param y Initial vertical location of the tile map.
        * @param resources A one dimensional array of image resources that make up the tile map (this cannot change after construction).
        */
        constructor(x: number, y: number, resources: Graphics.Assets.ImageSource[]) {
            super(new Vector2d(x, y));

            this._Resources = resources;
        }
    }

}