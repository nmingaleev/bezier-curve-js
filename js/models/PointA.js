import Point from './Point.js';

export default class PointA extends Point {
    /**
     * @param {Line} line 
     */
    constructor(line) {
        const { start, end } = line;

        const x = start.x + (end.x - start.x) / 2;
        const y = start.y + (end.y - start.y) / 2;

        super(x, y, 'brown');

        this.line = line;
    }
}