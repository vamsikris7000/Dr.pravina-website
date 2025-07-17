import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import 'aos/dist/aos.css';
import AOS from 'aos';

AOS.init({
  duration: 600,
  easing: 'ease-in-out',
  once: true,
  mirror: false,
});

createRoot(document.getElementById("root")!).render(<App />);
