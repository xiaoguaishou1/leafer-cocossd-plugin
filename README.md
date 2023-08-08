# Leafer + tensorflowJs

canvas 绘制的图片进行分类识别. 支持替换成自己训练的模型。

- [tensorflow](https://www.tensorflow.org/js?hl=zh-cn)
- [leaferjs](https://github.com/leaferjs/ui)

## 使用示例

```js
   const leafer = new Leafer({
      view: document.getElementById("c") as HTMLCanvasElement,
      width: 500,
      height: 500,
    });

    new Promise<void>((resolve) => {
      const imgage = new Image({
        url: img && URL.createObjectURL(img!),
      });
      leafer.add(imgage);
      resolve();
    }).then(() => {
      usePlugin(LeaafercocoSsd, { type: "cocossd" });
    });

```

## 截图

![识别结果]('./public/sso.png'')

- npm run install
- npm run dev
