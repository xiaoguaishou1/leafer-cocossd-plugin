import { ILeafer } from "leafer-ui";
import * as cocoSsd from '@tensorflow-models/coco-ssd';
/**
 * Predicts objects in an image and draws bounding boxes around them.
 *
 * @param {ILeafer} leafer - The leafer object containing the image canvas.
 * @param {cocoSsd.ObjectDetection} model - The object detection model.
 * @return {Promise<void>} A promise that resolves when the predictions are complete.
 */
export async function predictImage(leafer: ILeafer, model: cocoSsd.ObjectDetection) {
    const canvas = leafer.view as HTMLCanvasElement;
    const predictions = await model.detect(canvas);
    const context = canvas.getContext('2d')!;
    context.lineWidth = 2;
    context.strokeStyle = 'red';
    context.font = '16px Arial';
    predictions.forEach(prediction => {
        const [x, y, width, height] = prediction.bbox;
        context.beginPath();
        context.rect(x, y, width, height);
        context.stroke();
        context.fillText(`${prediction.class} (${Math.round(prediction.score * 100)}%)`, x, y > 10 ? y - 5 : 10);
    });
}


