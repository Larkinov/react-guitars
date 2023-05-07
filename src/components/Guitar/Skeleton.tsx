import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton:React.FC = (props) => (
  <ContentLoader 
    speed={2}
    width={320}
    height={520}
    viewBox="0 0 320 520"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="264" rx="0" ry="0" width="320" height="100" /> 
    <rect x="0" y="375" rx="36" ry="36" width="320" height="115" /> 
    <rect x="0" y="22" rx="0" ry="0" width="320" height="224" />
  </ContentLoader>
)

export default Skeleton
