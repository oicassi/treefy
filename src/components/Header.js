import { useEffect, useState } from 'react';
import styles from '@/styles/components/Header.module.scss';
import utilsStyles from '@/styles/base/utils.module.scss';

const Header = ({ isHome = true }) => {
  const [firstRender, setFirstRender] = useState(true);
  const getEndpoint = (x, y, a, length) => {
    var epx = x + length * Math.cos((a * Math.PI) / 180);
    var epy = y + length * Math.sin((a * Math.PI) / 180);
    return { x: epx, y: epy };
  };

  const drawTree = () => {
    const canvas = document.querySelector('#header-canvas');
    if (!canvas) return;
    const canvasWidth = canvas.getBoundingClientRect().width;
    const canvasHeight = canvas.getBoundingClientRect().height - 20;

    console.log({ canvasHeight, canvasWidth });
    const ctx = canvas.getContext('2d');
    let length = Math.floor(canvasHeight / 6) + Math.round(Math.random() * Math.floor(canvasHeight / 6));
    const divergence = 10 + Math.round(Math.random() * 50);
    const reduction = Math.round(50 + Math.random() * 20) / 100;
    let trunkWidth = 8;

    const trunk = { x: canvasWidth / 2, y: length + Math.floor(canvasHeight / 6), angle: 90 };
    let startPoints = [];
    startPoints.push(trunk);

    ctx.beginPath();
    ctx.moveTo(trunk.x, canvasHeight + 20);
    ctx.lineTo(trunk.x, canvasHeight - trunk.y);

    const gradient = ctx.createLinearGradient(0, 100, 0, 168);
    gradient.addColorStop(0, '#8A5630');
    gradient.addColorStop(1, '#FFFFFF00');

    ctx.strokeStyle = gradient;
    ctx.lineWidth = trunkWidth;
    ctx.stroke();

    const branches = () => {
      length = length * reduction;
      trunkWidth = trunkWidth * reduction;
      ctx.lineWidth = trunkWidth;

      var newStartPoints = [];
      ctx.beginPath();
      for (let i = 0; i < startPoints.length; i++) {
        const sp = startPoints[i];
        const ep1 = getEndpoint(sp.x, sp.y, sp.angle + divergence, length);
        const ep2 = getEndpoint(sp.x, sp.y, sp.angle - divergence, length);

        ctx.moveTo(sp.x, canvasHeight - sp.y);
        ctx.lineTo(ep1.x, canvasHeight - ep1.y);
        ctx.moveTo(sp.x, canvasHeight - sp.y);
        ctx.lineTo(ep2.x, canvasHeight - ep2.y);

        ep1.angle = sp.angle + divergence;
        ep2.angle = sp.angle - divergence;

        newStartPoints.push(ep1);
        newStartPoints.push(ep2);
      }
      if (length < 10) ctx.strokeStyle = '#209B4A';
      else ctx.strokeStyle = '#8A5630';
      ctx.stroke();
      startPoints = newStartPoints;
      if (length > 2) setTimeout(branches, 70);
    };
    branches();
  };

  useEffect(() => {
    if (!firstRender) return;
    setFirstRender(false);
    setTimeout(() => {
      drawTree();
    }, 300);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.grass} />
      <div className={`${utilsStyles.container} ${styles.container}`}>
        <h1 className={styles.title}>treefy</h1>
        <canvas id='header-canvas' width='144' height='162' className={styles.canvas} />
      </div>
    </header>
  );
};

export default Header;
