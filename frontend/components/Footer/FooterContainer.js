import { useEffect, useState } from 'react';
import Footer from './Footer';

function debounce(fn, ms) {
  let timer;
  return (_) => {
    clearTimeout(timer);
    timer = setTimeout((_) => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

const FooterContainer = ({ handleAppWidth }) => {
  const [innerWindowWidth, setInnerWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setInnerWindowWidth(window.innerWidth);
    }, 100);
    handleAppWidth(isMobile);

    window.addEventListener('resize', debouncedHandleResize);

    return (_) => {
      window.removeEventListener('resize', debouncedHandleResize);
    };
  });
  const isMobile = innerWindowWidth <= 1023;

  return <Footer isMobile={isMobile} />;
};

export default FooterContainer;
