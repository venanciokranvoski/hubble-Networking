import React from "react";

import { render } from "@test-utils";
import { PostCommentScreen } from "../../PostComponentScreen";

describe('integration PostCommentedScreen', () => {

    test('when Adding the list is automatically updated', ()=> {
        render(<PostCommentScreen navigation={{} as any} route={{
            name: 'PostCommentedScreen',
            key: 'PostCommentedScreen',
            params:{
                postID: 1,
                postAuthorId: 1
            }
        }} />);
    })
})