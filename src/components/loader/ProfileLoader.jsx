import React from "react";

import ContentLoader from "react-content-loader";

const ProfileLoader = (props) => (
  <ContentLoader
    speed={3}
    width={800}
    height={528}
    viewBox="0 0 800 528"
    backgroundColor="#white"
    foregroundColor="#03b8f7"
    {...props}
  >
    {/* <circle cx={`10`} cy="0" r="130" />

    <rect x="0" y="0" rx="2" ry="2" width="300" height="40" />
    <rect x="0" y="0" rx="2" ry="2" width="300" height="30" /> */}
    {/* <rect x="10" y="170" rx="2" ry="2" width="650" height="450" /> */}
    <circle cx="340" cy="286" r="18" />
    <circle cx="384" cy="286" r="18" />
    <circle cx="428" cy="286" r="18" />
  </ContentLoader>
);

export default ProfileLoader;
