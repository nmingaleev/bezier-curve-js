export default class Point {
    static _id = -1;

    static generateId() {
        Point._id += 1;

        return Point._id;
    }

    constructor(x, y, color = 'black') {
        this.id = Point.generateId();

        this.x = x;
        this.y = y;
        this.color = color;

        this.radius = 3;
        this.startAngle = 0;
        this.endAngle = Math.PI * 2;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}