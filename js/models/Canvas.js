Array.prototype.last = function() {
    return this[this.length - 1];
}

export default class Canvas {
    static init() {
        if (Canvas._instance) {
            return Canvas._instance;
        }

        Canvas._instance = new Canvas();

        Canvas._instance._canvas = document.getElementById('canvas');
        Canvas._instance.ctx = Canvas._instance._canvas.getContext('2d');

        Canvas._instance.points = [];
        Canvas._instance.pointAs = [];
        Canvas._instance.pointBs = [];
        Canvas._instance.helperPoints = [];
        Canvas._instance.lines = [];

        return Canvas._instance;
    }

    draw(point) {
        point.draw(this.ctx);
        this.points.push(point);
    }

    drawPointA(pointA) {
        pointA.draw(this.ctx);
        this.pointAs.push(pointA);
    }

    drawPointB(pointB) {
        pointB.draw(this.ctx);
        this.pointBs.push(pointB);
    }

    drawHelperPoint(point) {
        point.draw(this.ctx);
        this.helperPoints.push(point);
    }

    drawLine(line) {
        line.draw(this.ctx);
        this.lines.push(line);
    }

    addEventListener(event, callback) {
        this._canvas.addEventListener(event, callback);
    }

    getClickPosition(e) {
        const rect = this._canvas.getBoundingClientRect();
        const x = e.clientX  - rect.left;
        const y = e.clientY - rect.top;

        return {
            x,
            y
        };
    }

    getLastBearingPoint() {
        return this.points.last();
    }

    getLastPointA() {
        return this.pointAs.last();
    }
}