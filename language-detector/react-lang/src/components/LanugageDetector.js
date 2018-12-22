import React from "react";
import "./LanguageDetector.css";

class LanguageDetector extends React.Component {
  state = {
    loading: false,
    text: "",
    language: null
  };
  componentDidMount() {
    if (
      !process.env.REACT_APP_LANG_API_KEY &&
      process.env.NODE_ENV !== "test"
    ) {
      throw new Error(
        "environment variable REACT_APP_LANG_API_KEY is not set, api requests will not work properly"
      );
    }
  }
  abortController = new AbortController();
  lastRequest = new Date();
  getLanguage = async () => {
    // Space out api requests
    const now = new Date();
    if (now.getTime() - this.lastRequest.getTime() < 1000) {
      return;
    }
    this.lastRequest = new Date();
    // abort any current requests
    this.abortController.abort();
    this.setState({ loading: true });
    try {
      const res = await fetch(
        `http://apilayer.net/api/detect?access_key=${
          process.env.REACT_APP_LANG_API_KEY
        }&query=${this.state.text}`,
        { abort: this.abortController }
      );
      const data = await res.json();
      this.setState({ language: data.results[0].language_name });
    } catch (e) {
      console.error(e);
    }
  };
  handleChange = async e => {
    this.setState({ text: e.target.value });
    await this.getLanguage();
  };
  render() {
    return (
      <div>
        <p>I know what you speak</p>
        <input
          type="text"
          placeholder="type some text..."
          value={this.state.text}
          onChange={this.handleChange}
        />
        <p>Language: {this.state.language}</p>
      </div>
    );
  }
}

export default LanguageDetector;
