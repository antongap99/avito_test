import { FC } from 'react';
import style from './Card.module.css';
import  {Card as CardUI} from 'antd'
import { IGame } from '../../types/api-types';

interface CardProps {
  data: IGame
}


export const Card = ({data}:CardProps): JSX.Element => (
    <CardUI title="Card title" bordered={false} style={{ width: 300 }}>
      <p>{data.title}</p>
      <img src={data.freetogame_profile_url} alt="game" />
      <p>{data.short_description}</p>
      <p>{data.release_date}</p>
    </CardUI>
  )