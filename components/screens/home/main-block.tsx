import { useEffect, useRef, useState } from "react";
import { newImage } from "@/utils/image";
import Image from "next/image";
import styles from "./main-block.module.scss";
import { Button } from "@/components/ui";

const MainBlock = () => {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const buttonHover = useRef<HTMLButtonElement | null>(null);
  const beforeImage = useRef<HTMLImageElement | null>(null);
  const afterImage = useRef<HTMLImageElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [rootSize, setRootSize] = useState({ width: 0, height: 0 });
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  let [isAddEvent, setIsAddEvent] = useState(false);

  useEffect(() => {
    let needForRAF = false;
    let x = rootSize.width + 200;
    let y = rootSize.height / 2;

    const root = rootRef.current as HTMLDivElement;
    const canvas = canvasRef.current as HTMLCanvasElement;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

    const width = (canvas.width = rootSize.width);
    const height = (canvas.height = rootSize.height);

    const offset = (windowSize.width - width) / 2;

    let imageSizes = { x, y, width, height };
    let image = newImage();
    image.src = afterImage.current?.src as string;
    image.onload = () => {
      if (beforeImage.current) {
        const { x, y, width, height } = beforeImage.current?.getBoundingClientRect();
        imageSizes = { x, y, width, height };
      }
    };

    const slowPosition = (defaultX: number, defaultY: number, ts = 16.6666) => {
      let boostXButton = defaultX || 0;
      let boostYButton = defaultY || 0;

      return (x: number, y: number) => {
        boostXButton += (x - boostXButton) / ts;
        boostYButton += (y - boostYButton) / ts;

        return { boostX: boostXButton, boostY: boostYButton };
      };
    };

    const buttonTransition = slowPosition(x, y, 3);
    const clipTransition = slowPosition(x, y);

    const render = () => {
      const yArcCenter = Math.floor(height / 2);

      const { boostX, boostY } = clipTransition(x, y);

      ctx.clearRect(0, 0, width, height);

      ctx.beginPath();
      ctx.moveTo(width, 0);
      ctx.lineTo(width, height);
      ctx.lineTo(boostX - 100, height);
      ctx.bezierCurveTo(x, boostY + 200, x, boostY - 200, boostX + 100, 0);
      ctx.closePath();
      ctx.fill();

      ctx.globalCompositeOperation = "source-in";

      ctx.drawImage(image, imageSizes.x - offset, imageSizes.y - offset, imageSizes.width, imageSizes.height);

      ctx.globalCompositeOperation = "source-over";

      ctx.save();
      ctx.fillStyle = "rgba(2, 39, 78, .1)";
      ctx.fill();
      ctx.restore();

      const gradient = ctx.createRadialGradient(boostX, boostY, 40, boostX, boostY, yArcCenter);
      gradient.addColorStop(0, "#23c2a9");
      gradient.addColorStop(1, "transparent");
      ctx.lineWidth = 2;
      ctx.strokeStyle = gradient;
      ctx.stroke();

      if (buttonHover.current) {
        const buttonWidth = buttonHover.current?.clientWidth / 2;
        const { boostX, boostY } = buttonTransition(x, y);
        buttonHover.current.style.transform = `translate(${boostX - buttonWidth}px, ${boostY - buttonWidth}px)`;
      }

      requestAnimationFrame(render);
    };

    if (buttonHover.current) {
      buttonHover.current.addEventListener("mousedown", () => {
        if (!isAddEvent) return;
        document.addEventListener("mousemove", mouseMoveEvent);
        console.log("mousedown");
      });

      document.addEventListener("mouseup", () => {
        if (!isAddEvent) return;
        document.removeEventListener("mousemove", mouseMoveEvent);
        console.log("mouseup");
        resetPosition();
      });

      setIsAddEvent(true);
    }

    const resetPosition = () => {
      let startX = rootSize.width - rootSize.width / 3;
      let startY = rootSize.height / 2;

      let req: any = null;
      const calc = () => {
        let again = Math.atan2(y - startY, x - startX);

        x = x - Math.cos(again) * (Math.abs(startX - x) / 30);
        y = y - Math.sin(again) * (Math.abs(startX - x) / 30);
        req = requestAnimationFrame(calc);

        if (Math.abs(startX - x) < 5) {
          cancelAnimationFrame(req);
          needForRAF = false;
        }
      };

      req = requestAnimationFrame(calc);
    };

    const mouseMoveEvent = (evt: MouseEvent) => {
      x = evt.x - offset;
      y = evt.y - offset;
    };

    requestAnimationFrame(render);
    resetPosition();

    setRootSize({ width: root.clientWidth, height: root.clientHeight });
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }, [isAddEvent, rootSize.height, rootSize.width, windowSize.width]);

  return (
    <div ref={rootRef} className={styles.main_block}>
      <Button ref={buttonHover} className={styles.hover_button} icon={"arrow-double"} rounded={true} />
      <Image
        className={styles.bg_image}
        src={"/images/main-screen.jpg"}
        fill={true}
        priority={true}
        unoptimized={true}
        alt={""}
      />

      <div className={styles.image_wrapper}>
        <Image
          className={styles.before_image}
          ref={beforeImage}
          width={851}
          height={383}
          priority={true}
          unoptimized={true}
          src={"/images/before-image.png"}
          alt={""}
        />
        <Image className={styles.shadow} width={851} height={43} priority={true} src={"/images/shadow.png"} alt={""} />
        <Image
          ref={afterImage}
          width={851}
          height={383}
          hidden={true}
          unoptimized={true}
          src={"/images/after-image.png"}
          alt={""}
        />
      </div>
      <canvas className={styles.canvas} ref={canvasRef}></canvas>

      <div className="container">
        <div className={styles.main_description}>
          <h1>
            Ателье обивки и <br />
            перетяжки мягкой мебели
          </h1>
          <h6>
            Обновим вашу мебель, используя итальянские технологии, качественные материалы и многолетний опыт наших
            сотрудников.
          </h6>
          <Button color={"green"} label={"Посмотреть все услуги"}></Button>
        </div>
      </div>
    </div>
  );
};

export default MainBlock;
