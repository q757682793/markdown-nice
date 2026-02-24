// markdown-it plugin: intercept drawio code blocks and output placeholder containers
// Draw.io rendering is handled post-render in App.js componentDidUpdate

export default (md) => {
  const defaultFence = md.renderer.rules.fence.bind(md.renderer.rules);

  md.renderer.rules.fence = (tokens, idx, options, env, slf) => {
    const token = tokens[idx];
    const lang = token.info.trim().toLowerCase();

    if (lang === "drawio") {
      // Base64 encode the XML source to avoid HTML escaping issues
      const encoded = btoa(unescape(encodeURIComponent(token.content)));
      return `<div class="drawio-container" data-drawio="${encoded}"></div>`;
    }

    return defaultFence(tokens, idx, options, env, slf);
  };
};
