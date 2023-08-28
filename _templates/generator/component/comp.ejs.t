---
to: <%= absPath %>/<%= componentName %>.tsx
---
import { FC } from 'react';
import style from './<%= componentName %>.module.css';

interface Props {
  children?: FC;
}

export const <%= componentName %> = (props:Props): JSX.Element=> {
  return <div className = {style.container}></div>;
};


