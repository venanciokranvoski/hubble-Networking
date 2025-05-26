import { Image } from 'react-native';

export interface ProfileAvatarProps {
  imageURL: string;
  /**@default 32*/
  size?: number;
  /**@default 14 */
  borderRadius?: number;
}
export function ProfileAvatar({
  imageURL,
  borderRadius = 14,
  size = 32,
}: ProfileAvatarProps) {
  return (
    <Image
      source={{ uri: imageURL }}
      style={{ width: size, height: size, borderRadius: borderRadius }}
    />
  );
}
