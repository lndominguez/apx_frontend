import { Helmet } from 'react-helmet-async';

import ThreeView from '../../sections/three/view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Three</title>
      </Helmet>

      <ThreeView />
    </>
  );
}
