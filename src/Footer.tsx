import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './Footer.css';

// We don't need any content in index.html file at all. It can be empty.
function Footer() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>Remote footer</div>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          {/* Mora se navest URL na kome ce se ova remote componenta nalaziti jer ce u suprotnom host aplikacija koriti svoj URL i onda ne moze da nadje resurse na definisanom path-u. */}
          <img src={`${import.meta.env.VITE_ASSETS_BASE_URL}${viteLogo}`} className='logo' alt='Vite logo' />
        </a>
        {/* Mora se navest URL na kome ce se ova remote componenta nalaziti jer ce u suprotnom host aplikacija koriti svoj URL i onda ne moze da nadje resurse na definisanom path-u. */}
        <a href='https://react.dev' target='_blank'>
          <img src={`${import.meta.env.VITE_ASSETS_BASE_URL}${reactLogo}`} className='logo react' alt='React logo' />
        </a>
      </div>
      <p>Vite + React</p>

      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
      </div>
    </>
  );
}

export default Footer;
