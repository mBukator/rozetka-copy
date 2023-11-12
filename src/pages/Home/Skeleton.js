import React from 'react';
import ContentLoader from 'react-content-loader';

const MyLoader = (props) => (
  <ContentLoader
    className="tile-skeleton"
    speed={3}
    width={240}
    height={336}
    viewBox="0 0 240 336"
    backgroundColor="#ededed"
    foregroundColor="#d6d6d6"
    {...props}>
    <rect x="0" y="303" rx="2" ry="2" width="86" height="33" />
    <rect x="-3" y="220" rx="2" ry="2" width="240" height="23" />
    <rect x="1" y="278" rx="2" ry="2" width="58" height="14" />
    <rect x="0" y="0" rx="5" ry="5" width="240" height="210" />
  </ContentLoader>
);

export default MyLoader;
