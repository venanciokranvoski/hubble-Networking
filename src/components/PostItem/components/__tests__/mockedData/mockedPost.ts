import { Post } from "@domain";

 export const mockPost : Post = {
    id: 1,
    imageURL: 'fake.url',
    commentCount: 4,
    favoriteCount:4,
    reactionCount: 9,
    text: 'This is the (post description)',
    author: {
        id: 2,
        name: 'Maria',
        profileURL: 'https://example.com',
        userName: 'maria'
    }
}