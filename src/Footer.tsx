import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './Footer.css';

// We don't need any content in index.html file at all. It can be empty.
function Footer() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div style={{ color: 'black' }}>Remote footer</div>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          {/* We must define URL, where this component will eventually be available at, otherwise, host application will use it's own URL and it will not be able to find resources at defined path. */}
          <img src={`${import.meta.env.VITE_ASSETS_BASE_URL}${viteLogo}`} className='logo' alt='Vite logo' />
        </a>
        {/* We must define URL, where this component will eventually be available at, otherwise, host application will use it's own URL and it will not be able to find resources at defined path. */}
        <a href='https://react.dev' target='_blank'>
          <img src={`${import.meta.env.VITE_ASSETS_BASE_URL}${reactLogo}`} className='logo react' alt='React logo' />
        </a>
      </div>
      <p style={{ color: 'black' }}>Vite + React</p>

      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
      </div>
    </>
  );
}

export default Footer;
