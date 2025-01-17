import { renderHook, waitFor } from "@test-utils";

import { usePaginatedList } from "../usePaginatedList";
import { MetaDatePage, Page } from "@types";


const page1 = ['item1', 'item2', 'item3'];
const page2 = ['item4', 'item5', 'item6'];

async function getList(page: number): Promise<Page<string>> {
    const data = page === 1 ? page1 : page2;

    const meta: MetaDatePage = {
        currentPage: page,
        firstPage: 1,
        lastPage: 2,
        hasNextPage: page === 1,
        previous_page_url: page === 2,
        perPage: 3,
        total: 6,
    };

    return Promise.resolve({data, meta});
}
    const mockedGetList = jest.fn(getList);

describe('usePaginatedList', ()=> {
    it('returns all pages together and stops fetchings if thre are no more page', async () => {
        const  {result} = renderHook(()=> usePaginatedList(['key'], mockedGetList));

        await waitFor(()=> expect(result.current.list).toStrictEqual(page1));

        result.current.fetchNextPage();

        await waitFor(()=> expect(result.current.list).toStrictEqual([...page1, ...page2]));
    })
})