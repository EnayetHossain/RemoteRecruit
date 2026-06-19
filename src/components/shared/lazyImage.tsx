type LazyImageProps = React.ImgHTMLAttributes<HTMLImageElement>;

const LazyImage: React.FC<LazyImageProps> = (props) => {
  return <img {...props} loading="lazy" decoding="async" />;
};

export default LazyImage;
