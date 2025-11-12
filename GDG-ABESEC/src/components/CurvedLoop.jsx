import { useRef, useEffect, useState, useMemo, useId } from 'react';
import '../styles/CurvedLoop.css';

const CurvedLoop = ({
  marqueeText = 'Google Developers Group ABESEC',
  speed = 2,
  className,
  curveAmount = 0,
  direction = 'left',
  interactive = true
}) => {

  const text = useMemo(() => {
    const hasTrailing = /\s|\u00A0$/.test(marqueeText);
    return (hasTrailing ? marqueeText.replace(/\s+$/, '') : marqueeText) + '\u00A0';
  }, [marqueeText]);

  const measureRef = useRef(null);
  const textPathRef = useRef(null);
  const [spacing, setSpacing] = useState(0);
  const [offset, setOffset] = useState(0);

  // Unique path ID for multiple instances
  const uid = useId();
  const pathId = `curve-${uid}`;
  const pathD = `M-100,40 Q500,${40 + curveAmount} 1540,40`;

  const dragRef = useRef(false);
  const lastXRef = useRef(0);
  const dirRef = useRef(direction);
  const velRef = useRef(0);

  const totalText = spacing ? Array(Math.ceil(1800 / spacing) + 2).fill(text).join('') : text;
  const ready = spacing > 0;

  useEffect(() => {
    if (measureRef.current) {
      setSpacing(measureRef.current.getComputedTextLength());
    }
  }, [text, className]);

  useEffect(() => {
    if (!spacing || !textPathRef.current) return;
    const start = -spacing;
    textPathRef.current.setAttribute('startOffset', start + 'px');
    setOffset(start);
  }, [spacing]);

  useEffect(() => {
    if (!spacing || !ready) return;
    let frame;

    const animate = () => {
      if (!dragRef.current && textPathRef.current) {
        const step = dirRef.current === 'right' ? speed : -speed;
        let newOffset = parseFloat(textPathRef.current.getAttribute('startOffset') || '0') + step;

        if (newOffset <= -spacing) newOffset += spacing;
        if (newOffset > 0) newOffset -= spacing;

        textPathRef.current.setAttribute('startOffset', newOffset + 'px');
        setOffset(newOffset);
      }
      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [spacing, speed, ready]);

  const onPointerDown = e => {
    if (!interactive) return;
    dragRef.current = true;
    lastXRef.current = e.clientX;
    velRef.current = 0;
    e.target.setPointerCapture(e.pointerId);
  };

  const onPointerMove = e => {
    if (!interactive || !dragRef.current || !textPathRef.current) return;
    const movement = e.clientX - lastXRef.current;
    lastXRef.current = e.clientX;
    velRef.current = movement;

    let newOffset = parseFloat(textPathRef.current.getAttribute('startOffset') || '0') + movement;

    if (newOffset <= -spacing) newOffset += spacing;
    if (newOffset > 0) newOffset -= spacing;

    textPathRef.current.setAttribute('startOffset', newOffset + 'px');
    setOffset(newOffset);
  };

  const endDrag = () => {
    if (!interactive) return;
    dragRef.current = false;
    dirRef.current = velRef.current > 0 ? 'right' : 'left';
  };

  return (
    <div
      className="curved-loop-jacket"
      style={{ visibility: ready ? 'visible' : 'hidden', cursor: interactive ? (dragRef.current ? 'grabbing' : 'grab') : 'auto' }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerLeave={endDrag}
    >
      <svg className="curved-loop-svg" viewBox="0 0 1440 120">
        <text ref={measureRef} style={{ visibility: 'hidden', opacity: 0 }}>
          {text}
        </text>
        <defs>
          <path id={pathId} d={pathD} fill="none" stroke="transparent" />
        </defs>

        {ready && (
          <text fontWeight="bold" className={className}>
            <textPath ref={textPathRef} href={`#${pathId}`} startOffset={offset + 'px'}>
              {totalText}
            </textPath>
          </text>
        )}
      </svg>
    </div>
  );
};

export default CurvedLoop;
