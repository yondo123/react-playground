import useFetchMenu from '../services/useFetchMenu';
import { flexChildren } from '@styles/createFlexStyle';

export const Menu = () => {
  const menuList = useFetchMenu();

  return (
    <div css={flexChildren}>
      <h2>Menu</h2>
      {menuList?.map(menu => {
        return (
          <li key={menu.id} css={{ listStyle: 'none', margin: '0' }}>
            <button
              css={{
                marginTop: '8px',
                backgroundColor: '#00a8ff',
                color: 'white',
                borderStyle: 'none',
                border: '1px solid #ededed',
                borderRadius: '12px',
                width: '96px',
                height: '48px'
              }}
            >
              {menu.name}
            </button>
          </li>
        );
      })}
    </div>
  );
};
