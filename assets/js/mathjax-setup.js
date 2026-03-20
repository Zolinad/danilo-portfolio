window.MathJax = {
  tex: {
    tags: "ams",
    inlineMath: [
      ["$", "$"],
      ["\\(", "\\)"],
    ],
  },
  startup: {
    pageReady: () => {
      return MathJax.startup.defaultPageReady().then(() => {
        document.querySelectorAll('mjx-container[display="true"]').forEach(node => {
          let parent = node.parentNode;
          if (parent && !parent.classList.contains('math-scroll-wrapper')) {
            const wrapper = document.createElement('div');
            wrapper.className = 'math-scroll-wrapper';
            parent.insertBefore(wrapper, node);
            wrapper.appendChild(node);
          }
        });
      });
    }
  },
  options: {
    renderActions: {
      addCss: [
        200,
        function (doc) {
          const style = document.createElement("style");
          style.innerHTML = `
          .mjx-container {
            color: inherit;
          }
        `;
          document.head.appendChild(style);
        },
        "",
      ],
    },
  },
};

