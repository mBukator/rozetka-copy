import React from 'react';
import { Outlet, useParams } from 'react-router-dom';

import ProductPageNavigation from '../../ProductPageNavigation/ProductPageNavigation';

function ProductPageLayout() {
  const { id } = useParams();

  return (
    <>
      <ProductPageNavigation id={id} />
      <Outlet />
    </>
  );
}

export default ProductPageLayout;
