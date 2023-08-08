/*
 * @Author: panghu 760695955@qq.com
 * @Date: 2023-08-08 15:34:34
 * @LastEditors: panghu 760695955@qq.com
 * @LastEditTime: 2023-08-08 18:07:40
 * @FilePath: /leaferjs/src/plugin/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import * as cocoSsd from '@tensorflow-models/coco-ssd';
import '@tensorflow/tfjs';
import { Iconfig } from './type/index'
import { ILeafer, IObject } from '@leafer-ui/interface';
import { predictImage } from './utils/predictImage';

// 插件定义
export const LeaafercocoSsd = {
  importVersion: '1.0.0',
  import: ['LeaferTypeCreator'],
  config: {} as Iconfig,
  model: {} as cocoSsd.ObjectDetection,
  /**
   * A description of the entire function.
   *
   * @param {IObject} LeaferUI - description of parameter
   * @param {Iconfig} config - description of parameter
   * @return {void} description of return value
   */
  run(LeaferUI: IObject, config: Iconfig) {
    this.config = config;
  },
  /**
   * Asynchronously handles the "onLeafer" event.
   *
   * @param {ILeafer} leafer - The leafer object.
   * @return {Promise<void>} - A promise that resolves when the function completes.
   */
  async onLeafer(leafer: ILeafer) {
    const model = await cocoSsd.load()
    if (this.config.type === 'cocossd') {
      predictImage(leafer, model)
    }
  },
}

