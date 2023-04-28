import { worker } from '@mocks/worker';
import { Menu } from '@components/Menu';
import { Board } from '@components/Board';
import { Followers } from '@components/Followers';
import { flexParent } from '@styles/createFlexStyle';
import { globalStyle } from '@styles/createRootStyle';

export const App = () => {
  worker.start();
  return (
    <div css={globalStyle} className="font-loaded">
      <h2>Jiny Community</h2>
      <div css={flexParent}>
        <Menu />
        <Board />
        <Followers />
      </div>
    </div>
  );
};
