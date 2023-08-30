import { CSSProperties, FC } from 'react';
import { Header as HeaderUI } from 'antd/es/layout/layout';

interface Props {
  children?: FC;
  style?: CSSProperties
}

export const Header = ({style}:Props): JSX.Element=> {
  return (
    <HeaderUI style={style}/>
  )
};


