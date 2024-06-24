import { TextMessage } from '@components';
import { usePostCommentCreate } from '@domain';
import React, { useState } from 'react';
import { Keyboard } from 'react-native';

interface Props {
  postID: number;
  onAddComment: () => void;
}

export function PostCommentTextMessage({ postID, onAddComment }: Props) {
  const [message, setMessage] = useState('');
  const { createCommented } = usePostCommentCreate(postID, {
    onSuccess: () => {
      Keyboard.dismiss();
      onAddComment();
      setMessage('');
    },
  });

  return (
    <TextMessage
      placeholder="Adicione um comentario"
      onPressSend={createCommented}
      value={message}
      onChangeText={setMessage}
    />
  );
}
