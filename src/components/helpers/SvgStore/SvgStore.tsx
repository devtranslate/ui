import { useEffect, useState } from 'react';

export function SvgSprite() {
  const [svgStore, setSvgStore] = useState('');

  useEffect(() => {
    fetch('/svg-store.svg')
      .then((res) => res.text())
      .then((text) => setSvgStore(text));
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: svgStore }} style={{ display: 'none' }}></div>;
}
