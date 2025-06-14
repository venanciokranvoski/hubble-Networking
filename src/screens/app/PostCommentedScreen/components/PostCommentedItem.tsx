import { Box, ProfileAvatar, Text } from '@components';
import { PostComment, postCommentService, usePostRemove } from '@post';
import { useToastService } from '@services';
import { Alert, Pressable } from 'react-native';

interface Props {
  postId: number;
  postCommented: PostComment;
  userId: number;
  postAuthorID: number;
}

export function PostCommentedItem({
  postCommented,
  postAuthorID,
  userId,
  postId,
}: Props) {
  const { showToast } = useToastService();
  const { mutate } = usePostRemove(postId, {
    onSuccess: () => {
      showToast({
        message: 'Comentario deletado',
        type: 'error',
        duration: 5000,
      });
    },
  });

  const isAllowToDelete = postCommentService.isAllowToDelete(
    postCommented,
    userId,
    postAuthorID
  );

  function confirmRemove() {
    Alert.alert('Deseja excluir o comentário', 'pressione confirmar', [
      {
        text: 'Confirmar',
        onPress: () => mutate({ postComentedId: postCommented.id }),
      },
      {
        text: 'Cancelar',
        style: 'cancel',
      },
    ]);
  }

  return (
    <Pressable testID='post-comment-id' disabled={!isAllowToDelete} onLongPress={confirmRemove}>
      <Box
        paddingHorizontal="s24"
        flexDirection="row"
        alignItems="center"
        marginBottom="s16"
      >
        <ProfileAvatar imageURL={postCommented.author.profileURL} />
        <Box marginLeft="s12" flex={1}>
          <Text preset="paragraphSmall"  bold>
            {postCommented.author.userName}
          </Text>
          <Text preset="paragraphSmall" color="paragraph">
            {postCommented.message} - {postCommented.createdAtRelative}
          </Text>
        </Box>
      </Box>
    </Pressable>
  );
}
