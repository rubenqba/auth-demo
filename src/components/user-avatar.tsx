import { NextPage } from "next";
import Image from "next/image";

export interface UserAvatarOptions {
  url: string;
  name: string;
  styles: string;
}

export const UserAvatar: NextPage<UserAvatarOptions> = (props) => {
  const { url, name, styles = "h-16 w-16 rounded-full" } = props;
  return (
    <Image
      className={styles}
      src={url}
      alt={name}
      width={16}
      height={16}
    />
  );
};
