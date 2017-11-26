exports.decorateBrowserOptions = defaults => Object.assign({}, defaults, {
  frame: true,
  autoHideMenuBar: true,
  darkTheme: true,
});

exports.decorateHeader = (Header, env) => {
  // passing isMac prevents Header from drawing the header bar
  class DecoratedHeader extends env.React.Component {
    render() {
      return env.React.createElement(Header, Object.assign({}, this.props, {
        isMac: true
      }));
    }
  };
  return DecoratedHeader;
};

exports.decorateConfig = config => {
  return Object.assign({}, config, {
    css: `
      .tabs_nav {
        top: 0px;
      }
      .terms_terms {
        margin-top: 0;
      }
      .terms_termsShifted {
        margin-top: 34px;
      }
      ${config.css || ''}
    `,
  });
}
