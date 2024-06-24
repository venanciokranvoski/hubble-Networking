import { Box, ProfileAvatar, Text } from '@components';
import { PostComment, postCommentService, usePostRemove } from '@post';
import { useToastService } from '@services';
import { Alert, Pressable } from 'react-native';

interface Props {
  postCommented: PostComment;
  userId: number;
  postAuthorID: number;
  onRemoveCommented: () => void;
}

export function PostCommentedItem({
  postCommented,
  onRemoveCommented,
  postAuthorID,
  userId,
}: Props) {
  const { showToast } = useToastService();
  const { mutate } = usePostRemove({
    onSuccess: () => {
      onRemoveCommented();
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
        onPress: () => mutate({ postCommentedID: postCommented.id }),
      },
      {
        text: 'Cancelar',
        style: 'cancel',
      },
    ]);
  }

  return (
    <Pressable disabled={!isAllowToDelete} onLongPress={confirmRemove}>
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
    </Pressable>
  );
}
