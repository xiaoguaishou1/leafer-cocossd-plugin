/*
 * @Author: panghu 760695955@qq.com
 * @Date: 2023-08-08 15:21:02
 * @LastEditors: panghu 760695955@qq.com
 * @LastEditTime: 2023-08-08 18:08:45
 * @FilePath: /leaferjs/src/App.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useEffect, useState } from "react";
import { LeaafercocoSsd } from "../package/src/index";
import { Leafer, Image, usePlugin } from "leafer-ui";
/**
 * Renders the main application component.
 *
 * @return {JSX.Element} The rendered component.
 */
function App() {
  const [img, setFile] = useState<File>();
  useEffect(() => {
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
  });

  const handleFileChange = (event: any) => {
    setFile(event.target.files[0]);
  };

  return (
    <>
      <canvas id="c"></canvas>
      <input type="file" onChange={handleFileChange} />
    </>
  );
}

export default App;
