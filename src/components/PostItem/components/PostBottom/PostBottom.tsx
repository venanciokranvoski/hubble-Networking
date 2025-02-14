import React from 'react';
import {
  Box,
  Text as TextUser,
  Text as TextComentedUser,
  Text as TxtComented,
  TouchableOpacityVenon,
} from '@components';
import { Post } from '@domain';
import { useNavigation } from '@react-navigation/native';

type PropsComented = Pick<Post, 'author' | 'commentCount' | 'text' | 'id'>;
export function PostBottom({ author, commentCount, text, id }: PropsComented) {
  const navigation = useNavigation();

  // function to navigation Screen commented
  function navigateToPostScreenCommented() {
    navigation.navigate('PostCommentedScreen', {
      postID: Number(id),
      postAuthorId: author.id,
    });
  }

  const comentaryUser = GetComentedText(commentCount);
  return (
    <Box mt="s16">
      <TextUser color="grayBlack" bold preset="paragraphMedium">
        {author.userName}
      </TextUser>
      <TextComentedUser color="gray2" bold preset="paragraphMedium">
        {text}
      </TextComentedUser>
      {comentaryUser && (
        <TouchableOpacityVenon>
          <TxtComented
            onPress={navigateToPostScreenCommented}
            mt="s8"
            color="primary"
            bold
            preset="paragraphSmall"
          >
            ver {commentCount} comentarios
          </TxtComented>
        </TouchableOpacityVenon>
      )}
    </Box>
  );
}

// quando eu isolo a minha function da view fica bem melhor para testar
// TDD
function GetComentedText(comentCount: number): string | null {
  if (comentCount === 0) {
    return null;
  } else if (comentCount === 1) {
    return 'ver comentario';
  } else {
    return `Ver ${comentCount} comentários`;
  }
}
