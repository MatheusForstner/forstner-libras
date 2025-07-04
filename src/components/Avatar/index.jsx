import Image from "next/image";
import "./avatar-module.css";

export const Avatar = ({ name, imageSrc }) => (
  <div className="avatar-wrapper">
    <Image
      src={imageSrc}
      width={28}
      height={28}
      alt={`Avatar de ${name}`}
      className="avatar-img"
    />
    <span className="author-name">@{name}</span>
  </div>
);
