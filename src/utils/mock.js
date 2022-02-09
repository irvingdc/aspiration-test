import { GET_RELATED_TOPICS } from "./queries";

export const GET_RELATED_TOPICS_MOCK = [
  {
    request: {
      query: GET_RELATED_TOPICS,
    },
    result: {
      data: {
        topic: {
          relatedTopics: [
            {
              id: 1,
              name: "Angular",
              stargazers: {
                totalCount: 10,
              },
            },
            {
              id: 2,
              name: "Vue",
              stargazers: {
                totalCount: 20,
              },
            },
            {
              id: 3,
              name: "JavaScript",
              stargazers: {
                totalCount: 30,
              },
            },
          ],
        },
      },
    },
  },
];
