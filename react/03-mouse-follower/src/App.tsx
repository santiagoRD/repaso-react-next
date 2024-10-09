import { useEffect, useState } from 'react';
import { PositionType } from './types';
import './App.css';

function App() {
  const [enabled, setEnabled] = useState<boolean>(false);
  const [position, setPosition] = useState<PositionType>({
    x: 0,
    y: 0
  });
  useEffect(() => {
    if (!enabled) return;
    const handleMove = (event: PointerEvent) => {
      const { clientX, clientY } = event;
      setPosition({
        x: clientX,
        y: clientY
      });
    };
    window.addEventListener('pointermove', handleMove);
    return () => {
      window.removeEventListener('pointermove', handleMove);
    };
  }, [enabled]);

  return (
    <>
      <h3>Proyecto 3</h3>
      <div
        style={{
          position: 'absolute',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          border: '1px solid #fff',
          borderRadius: '50%',
          opacity: 0.8,
          pointerEvents: 'none',
          left: -25,
          top: -25,
          width: 50,
          height: 50,
          transform: `translate(${position.x}px, ${position.y}px)`
        }}
      ></div>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivar ' : 'Activar '}Seguir puntero
      </button>
    </>
  );
}

export default App;
