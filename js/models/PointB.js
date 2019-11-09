import Point from './Point.js';

export default class PointB extends Point {
    /**
     * @param {Line} line 
     */
    constructor(line) {
        const { start, end } = line;

        const x = start.x + (end.x - start.x) * (start.line.length / (start.line.length + end.line.length));
        const y = start.y + (end.y - start.y) * (start.line.length / (start.line.length + end.line.length));

        super(x, y, 'yellow');

        this.line = line;
    }
}