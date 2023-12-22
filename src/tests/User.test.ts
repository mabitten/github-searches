import { sortbyStart } from "@/utils";

describe("Test scenarios for: sortbyStart", () => {
    it("should sort repositories in ascending order", () => {
        const repositories = [
            { name: "Repo1", stargazers_count: 3 },
            { name: "Repo2", stargazers_count: 1 },
            { name: "Repo3", stargazers_count: 2 },
        ];

        const sortedRepositories = sortbyStart(repositories as never, "asc");

        expect(sortedRepositories).toEqual([
            { name: "Repo2", stargazers_count: 1 },
            { name: "Repo3", stargazers_count: 2 },
            { name: "Repo1", stargazers_count: 3 },
        ]);
    });

    it("should sort repositories in descending order", () => {
        const repositories = [
            { name: "Repo1", stargazers_count: 3 },
            { name: "Repo2", stargazers_count: 1 },
            { name: "Repo3", stargazers_count: 2 },
        ];

        const sortedRepositories = sortbyStart(repositories as never, "desc");

        expect(sortedRepositories).toEqual([
            { name: "Repo1", stargazers_count: 3 },
            { name: "Repo3", stargazers_count: 2 },
            { name: "Repo2", stargazers_count: 1 },
        ]);
    });
});
