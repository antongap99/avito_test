---
to: <%= absPath %>/<%= pageName %>.tsx
---
import { FC } from 'react';
import style from './<%= pageName %>.module.css';

interface Props {
  children?: FC;
}

export const <%= pageName %> = (props:Props) => {
  return <div className = {style.container}></div>;
};


