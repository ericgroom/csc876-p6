import React from "react";
import { shallow, mount } from "enzyme";
import LanguageDetector from "./LanugageDetector";

jest.useFakeTimers();

beforeEach(() => {
  fetch.resetMocks();
});
it("renders without crashing", () => {
  shallow(<LanguageDetector />);
});
/*
 * This works but was very non-intuitive and required some searching and a bunch of packages
 */
it("calls api when user changes text", async () => {
  fetch.mockResponse(
    JSON.stringify({ results: [{ language_name: "English" }] })
  );
  const wrapper = mount(<LanguageDetector />);
  //wrapper.setState({ text: "This is some English text" });
  wrapper.instance().lastRequest = new Date("12/12/2000");
  await wrapper.instance().getLanguage();

  expect(wrapper.state().language).toBe("English");
  expect(fetch.mock.calls.length).toBe(1);
});

it("doesn't call api when previous request was less than 1 second ago", async () => {
  fetch.mockResponse(
    JSON.stringify({ results: [{ language_name: "French" }] })
  );
  const wrapper = mount(<LanguageDetector />);
  //wrapper.setState({ text: "This is some English text" });
  wrapper.instance().lastRequest = new Date("12/12/2000");
  await wrapper.instance().getLanguage();
  await wrapper.instance().getLanguage();

  expect(wrapper.state().language).toBe("French");
  expect(fetch.mock.calls.length).toBe(1);
});
