import Image from "next/image";

const MainImage = ({ game_image, game_name, custom_style }) => {
  return (
    <Image
      src={game_image}
      alt={game_name}
      width={500}
      height={500}
      className={custom_style}
      priority={true}
    />
  );
};
export default MainImage;
