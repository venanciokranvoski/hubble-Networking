import React from 'react';
import { fireEvent, render, screen } from '@test-utils';
import { PostBottom } from '../PostBottom/PostBottom';
import { mockPost } from './mockedData/mockedPost';

const mockNavigation = jest.fn();


jest.mock('@react-navigation/native', ()=> {
    const mainModule = jest.requireActual('@react-navigation/native')
    return {
        ...mainModule,
        useNavigation: () => ({
            navigate: mockNavigation,
        })
    }
})


describe('<PostBottom />', ()=> {

    beforeEach(()=> {
        mockNavigation.mockClear();
    })


    test('render component', ()=> {
        render(<PostBottom {...mockPost} commentCount={0} />);

        const commentLinkElement = screen.queryByText(/comentário/);

        expect(commentLinkElement).toBeFalsy();
    });

    it('navigates to PostComentScreen whn Pressing the comment link', ()=> {
        render(<PostBottom {...mockPost}  commentCount={4} />)

        const commentedList = screen.getByText(/comentario/);

        fireEvent.press(commentedList);

        expect(mockNavigation).toHaveBeenCalledWith('PostCommentedScreen', {
            postID: mockPost.id,
            postAuthorId: mockPost.author.id
        })
    });
})