export default class Line {
    /**
     * @param {Point} start 
     * @param {Point} end 
     * @param {string} style 
     */
    constructor(start, end, style) {
        this.start = start;
        this.end = end;
        this.style = style;
    }

    get length() {
        return Math.sqrt(Math.pow(this.end.x - this.start.x, 2) + Math.pow(this.end.y - this.start.y, 2));
    }

    draw(ctx) {
        ctx.beginPath();

        ctx.moveTo(this.start.x, this.start.y);
        ctx.lineTo(this.end.x, this.end.y);

        ctx.strokeStyle = this.style;
        ctx.stroke();
    }
}