import React from "react";
import ContentLoader from "react-content-loader";

const PostLoader = (props) => (
  <ContentLoader
    speed={3}
    width={800}
    height={660}
    viewBox="0 0 800 660"
    backgroundColor="black"
    foregroundColor="#03b8f7"
    {...props}
  >
    <circle cx="51" cy="45" r="30" />
    <rect x="95" y="34" rx="2" ry="2" width="140" height="25" />
    <rect x="22" y="90" rx="2" ry="2" width="650" height="20" />
    <rect x="20" y="150" rx="2" ry="2" width="650" height="450" />
  </ContentLoader>
);

export default PostLoader;
