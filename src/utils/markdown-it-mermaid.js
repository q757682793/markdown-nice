// markdown-it plugin: intercept mermaid code blocks and output placeholder containers
// Mermaid rendering is handled post-render in App.js componentDidUpdate

export default (md) => {
  const defaultFence = md.renderer.rules.fence.bind(md.renderer.rules);

  md.renderer.rules.fence = (tokens, idx, options, env, slf) => {
    const token = tokens[idx];
    const lang = token.info.trim().toLowerCase();

    if (lang === "mermaid") {
      // Base64 encode the source to avoid HTML escaping issues
      const encoded = btoa(unescape(encodeURIComponent(token.content)));
      return `<div class="mermaid-container" data-mermaid="${encoded}"></div>`;
    }

    return defaultFence(tokens, idx, options, env, slf);
  };
};
