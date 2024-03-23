import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import { TbCamper } from 'react-icons/tb';

import { Header, Link, NavList, IconWrapper } from './Layout.styled';
import Loader from 'components/Loader';
import { VanIcon } from 'components/Icons';

const Layout = () => {
  return (
    <>
      <Header>
        <NavList>
          <li>
            <Link to="/">
              <IconWrapper>
                <VanIcon width={40} height={40} />
              </IconWrapper>
            </Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/catalog">Catalog</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
        </NavList>
      </Header>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
