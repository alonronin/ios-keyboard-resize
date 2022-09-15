import { useDeferredValue, useEffect, useState } from 'react';

export default function App() {
  const [height, setHeight] = useState(0);
  const chatHeight = useDeferredValue(height);

  const handleResize = () => {
    setHeight(window.visualViewport.height);
  };

  useEffect(() => {
    setHeight(window.visualViewport.height);
    window.visualViewport.addEventListener('resize', handleResize);

    return () => {
      window.visualViewport.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div id="chat" style={{ height: chatHeight + 'px' }}>
      <iframe src="./frame" />
    </div>
  );
}
