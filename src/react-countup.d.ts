declare module 'react-countup' {
    import { ComponentType } from 'react';
  
    interface CountUpProps {
      start?: number;
      end: number;
      duration?: number;
      delay?: number;
      separator?: string;
      decimals?: number;
      decimal?: string;
      prefix?: string;
      suffix?: string;
      onEnd?: () => void;
      onStart?: () => void;
    }
  
    const CountUp: ComponentType<CountUpProps>;
    export default CountUp;
  }
  