import { FC } from 'react';
import style from './CardWrapper.module.css';
import { useGames } from '../../hooks/useGames';
import { Card } from '../Card/Card';

interface Props {
  children?: FC;
}

export const CardWrapper = (): JSX.Element=> {
  const [games] = useGames()
  return (
      <div className={style.cards}>
        {!games.length ? (
          <p className={style.loading}>Загрузка...</p>
        ) : (
          games.map((game) => <Card key={game.id} data={game} />)
        )}
      </div>
  );
};

