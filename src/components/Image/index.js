import { ImageContainer } from './styles';

function Image({ src, alt }) {
  return (
    <ImageContainer>
      <img src={src} alt={alt} />
    </ImageContainer>
  )
}

export { Image }