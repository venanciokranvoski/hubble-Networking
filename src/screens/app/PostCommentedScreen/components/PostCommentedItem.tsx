import { Box, ProfileAvatar, Text } from '@components';
import { PostComment } from '@post';
import { dateUtils } from '@utils';

interface Props {
  postCommented: PostComment;
}

export function PostCommentedItem({ postCommented }: Props) {
  return (
    <Box
      paddingHorizontal="s24"
      flexDirection="row"
      alignItems="center"
      marginBottom="s16"
    >
      <ProfileAvatar imageURL={postCommented.author.profileURL} />
      <Box marginLeft="s12" flex={1}>
        <Text preset="paragraphSmall" color="grayBlack" bold>
          {postCommented.author.userName}
        </Text>
        <Text preset="paragraphSmall" color="gray1">
          {postCommented.message} - {postCommented.createdAtRelative}
        </Text>
      </Box>
    </Box>
  );
}
