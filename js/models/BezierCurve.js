export default class BezierCurve {
    constructor(ctx) {
        this.ctx = ctx;
    }

    drawSegment(segmentPoints) {
        this.ctx.beginPath();
        this.ctx.moveTo(segmentPoints[0].x, segmentPoints[0].y);

        let step = 0.01;

        for (let t = 0; t <= 1; t += step) {
            let x = 0;
            let y = 0;

            for (let i = 0; i < segmentPoints.length; i++) {
                x += segmentPoints[i].x * BezierCurve.bernsteinPolynamial(i, segmentPoints.length - 1, t);
                y += segmentPoints[i].y * BezierCurve.bernsteinPolynamial(i, segmentPoints.length - 1, t);
            }

            this.ctx.lineTo(x, y);
            this.ctx.strokeStyle = 'red';
            this.ctx.stroke();
        }
    }

    static bernsteinPolynamial(i, n, t) {
        return this.fact(n) / (this.fact(i) * this.fact(n - i)) * Math.pow(t, i) * Math.pow(1 - t, n - i);
    }

    static fact(n) {
        return n ? n * this.fact(n - 1) : 1;
    }
}