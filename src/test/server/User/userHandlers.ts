import { BASE_URL, PageApi } from "@api";
import { USER_PATH, UserApi } from "@domain";
import { http, HttpResponse } from "msw";
import { usermocked } from "./userMocked";

export const usersHandlers = [];


const FULL_URL = `${BASE_URL}${USER_PATH}`;

export const userHandler = [
    http.get(FULL_URL,
        async () => {
            const response: PageApi<UserApi> = usermocked.mockedUserResponse;
            return HttpResponse.json(response, {status: 200})
        }),
    http.get<{userId: string}>(`${FULL_URL}/:userId`, async ({params}) => {
        const userAPI = usermocked.userList.find(
            user => user.id.toString() === params.userId,
        );
        return HttpResponse.json(userAPI, {status: 200})
    }),
]