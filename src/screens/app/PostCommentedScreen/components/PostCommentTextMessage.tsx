import { TextMessage } from '@components';
import { usePostCommentCreate } from '@domain';
import React, { useState } from 'react';
import { Keyboard } from 'react-native';

interface Props {
  postID: number;
}

export function PostCommentTextMessage({ postID }: Props) {
  const [message, setMessage] = useState('');
  const { createCommented } = usePostCommentCreate(postID, {
    onSuccess: () => {
      Keyboard.dismiss();
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
