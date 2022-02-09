import { MockedProvider } from "@apollo/client/testing";
import ResultsList from "../components/ResultsList";
import { render, screen } from "@testing-library/react";
import { GET_RELATED_TOPICS_MOCK } from "../utils/mock";

it("renders related topics from graphql", async () => {
  render(
    <MockedProvider mocks={GET_RELATED_TOPICS_MOCK} addTypename={false}>
      <ResultsList />
    </MockedProvider>
  );
  const items = await screen.findAllByRole("button");
  expect(items).toHaveLength(3);
  expect(screen.getByText("Angular")).toBeTruthy();
  expect(screen.getByText("Vue")).toBeTruthy();
  expect(screen.getByText("JavaScript")).toBeTruthy();
});
