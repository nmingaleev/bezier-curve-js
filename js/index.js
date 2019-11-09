import Canvas from './models/Canvas.js';
import Point from './models/Point.js';
import PointA from './models/PointA.js';
import PointB from './models/PointB.js';
import Line from './models/Line.js';
import BezierCurve from './models/BezierCurve.js';

(function() {
    const canvas = Canvas.init();
    const bezierCurve = new BezierCurve(canvas.ctx);

    let segmentPoints = [];

    canvas.addEventListener('click', (e) => {
        const { x, y } = canvas.getClickPosition(e);

        const bearingPoint = new Point(x, y);
        const lastBearingPoint = canvas.getLastBearingPoint();

        if (lastBearingPoint) {
            // Connect bearing points
            const line = new Line(lastBearingPoint, bearingPoint, 'black');
            canvas.drawLine(line);

            const pointA = new PointA(line);
            const lastPointA = canvas.getLastPointA();

            if (lastPointA) {
                // Connect A points
                const line = new Line(lastPointA, pointA, 'brown');
                canvas.drawLine(line);

                const pointB = new PointB(line);
                canvas.drawPointB(pointB);

                const xDiff = lastPointA.line.end.x - pointB.x;
                const yDiff = lastPointA.line.end.y - pointB.y;

                const helperPoint1 = new Point(lastPointA.x + xDiff, lastPointA.y + yDiff, 'purple');
                const helperPoint2 = new Point(pointA.x + xDiff, pointA.y + yDiff, 'purple');

                canvas.drawHelperPoint(helperPoint1);

                const helperLine = new Line(helperPoint1, helperPoint2, 'purple');
                canvas.drawLine(helperLine);

                canvas.drawHelperPoint(helperPoint2);

                segmentPoints.push(helperPoint1, lastPointA.line.end);

                bezierCurve.drawSegment(segmentPoints);
                
                segmentPoints = [lastPointA.line.end, helperPoint2];
            }

            canvas.drawPointA(pointA);
        } else {
            segmentPoints.push(bearingPoint);
        }

        canvas.draw(bearingPoint);
    })
})();