import { shallowMount } from "@vue/test-utils";
import LanguageDetector from "@/components/LanguageDetector";

describe("LanguageDetector", () => {
  it("renders without crashing", () => {
    shallowMount(LanguageDetector);
  });
  it("calls api when user changes text", async () => {
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve({ results: [{ language_name: "English" }] })
      })
    );
    const wrapper = shallowMount(LanguageDetector);
    wrapper.setData({ lastRequest: new Date("12/12/2000") });
    await wrapper.vm.getLanguage();
    expect(fetch.mock.calls.length).toBe(1);
    expect(wrapper.vm.language).toBe("English");
  });
  it("doesn't call api when previous request was less than 1 second ago", async () => {
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve({ results: [{ language_name: "French" }] })
      })
    );
    const wrapper = shallowMount(LanguageDetector);
    wrapper.setData({ lastRequest: new Date("12/12/2000") });
    await wrapper.vm.getLanguage();
    await wrapper.vm.getLanguage();
    expect(fetch.mock.calls.length).toBe(1);
    expect(wrapper.vm.language).toBe("French");
  });
});
