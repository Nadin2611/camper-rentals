import { scroller } from 'react-scroll';

export const handleScroll = element => {
  scroller.scrollTo(element, {
    duration: 1500,
    smooth: true,
    delay: 0,
    offset: -120,
  });
};
