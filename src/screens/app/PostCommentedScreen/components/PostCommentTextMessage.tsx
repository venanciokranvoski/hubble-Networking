import { TextMessage } from '@components';
import { usePostCommentCreate } from '@domain';
import React, { useState } from 'react';
import { Keyboard } from 'react-native';

interface Props {
  postID: number;
}

export function PostCommentTextMessage({ postID }: Props) {
  const { createCommented } = usePostCommentCreate(postID);
  const [message, setMessage] = useState('');

  function onPressSend() {
    createCommented(message);
    setMessage('');
    Keyboard.dismiss();
  }

  return (
    <TextMessage
      placeholder="Adicione um comentario"
      onPressSend={onPressSend}
      value={message}
      onChangeText={setMessage}
    />
  );
}
