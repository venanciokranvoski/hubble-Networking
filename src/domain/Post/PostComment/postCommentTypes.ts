export interface PostComment {
  id: number;
  message: string;
  created_at: string;
  author: {
    id: number;
    profileURL: string;
    name: string;
    userName: string;
  };
}

// describe interface for API commented
export interface PostCommentedAPI {
  id: number;
  message: string;
  user_id: number;
  post_id: number;
  created_at: string;
  updated_at: string;
  user: {
    id: number;
    first_name: string;
    last_name: string;
    username: string;
    email: string;
    profile_url: string;
    is_online: boolean;
    full_name: string;
  };
  meta: any;
}
