import { type TSingleUser, type TSingleUserResponse } from "@/types";

/**
 *
 */
export const sanitizerUser = (response: TSingleUserResponse): TSingleUser => {
    return {
        avatar_url: response.avatar_url,
        login: response.login,
        email: response.email,
        bio: response.bio,
        followers: response.followers,
        following: response.following,
    };
};
