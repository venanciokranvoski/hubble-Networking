import { Box, ProfileAvatar, Text } from '@components';
import { PostComment } from '@post';
import { dateUtils } from '@utils';

interface Props {
  postCommented: PostComment;
}

export function PostCommentedItem({ postCommented }: Props) {
  return (
    <Box flexDirection="row" alignItems="center">
      <ProfileAvatar imageURL={postCommented.author.profileURL} />
      <Box marginLeft="s12" mb="s16" flex={1}>
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
