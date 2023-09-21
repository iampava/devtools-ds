> ❗️ This is a forked package, with the goal of removing the deprecated React `defaultProps` feature in favor of native default props.

<div align="center">
  <img
    src=".storybook/devtools-ds-logo.svg"
    alt="Devtools DS Logo"
    width="200px"
    padding="40px"
  />
  <br />
  <br />
  <p>Components and tools for building browser devtools extensions, built on <a href="https://github.com/intuit/design-systems-cli">DS-CLI</a> and <a href="https://github.com/intuit/postcss-themed">PostCSS Themed</a>.</p>
</div>

---

<div align="center">
<a href="https://circleci.com/gh/circleci/circleci-docs"><img src="https://circleci.com/gh/intuit/devtools-ds.svg?style=svg&circle-token=b5183499c8ac0141ceabc248d3575a946e243bbb" alt="CircleCI" /></a>
<a href="#contributors"><img src="https://img.shields.io/badge/all_contributors-5-orange.svg?style=flat-square&logo=github" alt="All Contributors" /></a>
<a href="#version"><img src="https://img.shields.io/npm/v/@iampava-devtools-ds/tree?style=flat-square" alt="Version" /></a>
  <a href="#downloads"><img src="https://img.shields.io/npm/dt/@iampava-devtools-ds/themes?style=flat-square" alt="Downloads" /></a>
<a href="https://github.com/intuit/auto"><img src="https://img.shields.io/badge/release-auto.svg?style=flat-square&colorA=888888&amp;colorB=9B065A&amp;label=auto&amp;logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAACzElEQVR4AYXBW2iVBQAA4O+/nLlLO9NM7JSXasko2ASZMaKyhRKEDH2ohxHVWy6EiIiiLOgiZG9CtdgG0VNQoJEXRogVgZYylI1skiKVITPTTtnv3M7+v8UvnG3M+r7APLIRxStn69qzqeBBrMYyBDiL4SD0VeFmRwtrkrI5IjP0F7rjzrSjvbTqwubiLZffySrhRrSghBJa8EBYY0NyLJt8bDBOtzbEY72TldQ1kRm6otana8JK3/kzN/3V/NBPU6HsNnNlZAz/ukOalb0RBJKeQnykd7LiX5Fp/YXuQlfUuhXbg8Di5GL9jbXFq/tLa86PpxPhAPrwCYaiorS8L/uuPJh1hZFbcR8mewrx0d7JShr3F7pNW4vX0GRakKWVk7taDq7uPvFWw8YkMcPVb+vfvfRZ1i7zqFwjtmFouL72y6C/0L0Ie3GvaQXRyYVB3YZNE32/+A/D9bVLcRB3yw3hkRCdaDUtFl6Ykr20aaLvKoqIXUdbMj6GFzAmdxfWx9iIRrkDr1f27cFONGMUo/gRI/jNbIMYxJOoR1cY0OGaVPb5z9mlKbyJP/EsdmIXvsFmM7Ql42nEblX3xI1BbYbTkXCqRnxUbgzPo4T7sQBNeBG7zbAiDI8nWfZDhQWYCG4PFr+HMBQ6l5VPJybeRyJXwsdYJ/cRnlJV0yB4ZlUYtFQIkMZnst8fRrPcKezHCblz2IInMIkPzbbyb9mW42nWInc2xmE0y61AJ06oGsXL5rcOK1UdCbEXiVwNXsEy/6+EbaiVG8eeEAfxvaoSBnCH61uOD7BS1Ul8ESHBKWxCrdyd6EYNKihgEVrwOAbQruoytuBYIFfAc3gVN6iawhjKyNCEpYhVJXgbOzARyaU4hCtYizq5EI1YgiUoIlT1B7ZjByqmRWYbwtdYjoWoN7+LOIQefIqKawLzK6ID69GGpQgwhhEcwGGUzfEPAiPqsCXadFsAAAAASUVORK5CYII=" alt="Auto Release" /></a> 
<a href="https://github.com/prettier/prettier"><img src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square&logo=producthunt" alt="code style: prettier" /></a>
</div>

Ever wanted to build your own browser extension or devtools panel? This project can help! We've built out a set of utilities and React components that let you mirror the functionality of the Chrome/FireFox developer tools.

Each component:

- Supports themes for multiple browsers
- Is fully written in TypeScript
- Aims to be keyboard accessible and screen-reader friendly
- Uses minimal external dependencies

Read more in our [Storybook documentation site](https://intuit.github.io/devtools-ds).

## :hammer: Developer Set-up

Access source files and and make contributions using the following setup steps:

1. Clone the repo

   ```sh
   git clone https://github.com/design-systems/devtools-ds.git
   cd devtools-ds
   ```

2. Install dependencies

   ```sh
   yarn
   ```

3. Build

   ```sh
   yarn build
   ```

4. Start Storybook

   ```sh
   yarn storybook
   ```

# 🤝 Contributing

Whether it's improving documentation, adding a new component, or suggesting an issue that will help us improve, all contributions are welcome!

Top reasons to contribute:

<ul>
  <li>
    <span aria-hidden style={{ marginRight: 8 }}>
      😍
    </span>
    Empower others to build high quality browser devtools experiences
  </li>
  <li>
    <span aria-hidden style={{ marginRight: 8 }}>
      🎓
    </span>
    Learn design system development
  </li>
  <li>
    <span aria-hidden style={{ marginRight: 8 }}>
      ⏳
    </span>
    Help maintainers prioritize impactful work
  </li>
</ul>

Here are some ideas for contributions:

- New components
- New themes (We'd love to see some Safari themes eventually)
- Accessibility improvements
- New browser extension templates
- Support for frameworks like Vue, Angular, or Svelte

For more information about contributing, read our [contributing guide](./CONTRIBUTING.md) and [code of conduct](./CODE_OF_CONDUCT.md).

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/tylerkrupicka"><img src="https://avatars.githubusercontent.com/u/5761061?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Tyler Krupicka</b></sub></a><br /><a href="#a11y-tylerkrupicka" title="Accessibility">️️️️♿️</a> <a href="https://github.com/design-systems/devtools-ds/issues?q=author%3Atylerkrupicka" title="Bug reports">🐛</a> <a href="https://github.com/design-systems/devtools-ds/commits?author=tylerkrupicka" title="Code">💻</a> <a href="#design-tylerkrupicka" title="Design">🎨</a> <a href="https://github.com/design-systems/devtools-ds/commits?author=tylerkrupicka" title="Documentation">📖</a> <a href="#example-tylerkrupicka" title="Examples">💡</a> <a href="#infra-tylerkrupicka" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#maintenance-tylerkrupicka" title="Maintenance">🚧</a> <a href="https://github.com/design-systems/devtools-ds/commits?author=tylerkrupicka" title="Tests">⚠️</a> <a href="#tool-tylerkrupicka" title="Tools">🔧</a></td>
    <td align="center"><a href="https://github.com/adierkens"><img src="https://avatars.githubusercontent.com/u/13004162?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Adam Dierkens</b></sub></a><br /><a href="#a11y-adierkens" title="Accessibility">️️️️♿️</a> <a href="https://github.com/design-systems/devtools-ds/commits?author=adierkens" title="Code">💻</a> <a href="#design-adierkens" title="Design">🎨</a> <a href="https://github.com/design-systems/devtools-ds/commits?author=adierkens" title="Documentation">📖</a> <a href="#example-adierkens" title="Examples">💡</a> <a href="#infra-adierkens" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#maintenance-adierkens" title="Maintenance">🚧</a> <a href="#platform-adierkens" title="Packaging/porting to new platform">📦</a> <a href="https://github.com/design-systems/devtools-ds/commits?author=adierkens" title="Tests">⚠️</a> <a href="#tool-adierkens" title="Tools">🔧</a></td>
    <td align="center"><a href="https://github.com/ShelbyCohen"><img src="https://avatars.githubusercontent.com/u/7768053?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Shelby Cohen</b></sub></a><br /><a href="#a11y-ShelbyCohen" title="Accessibility">️️️️♿️</a> <a href="https://github.com/design-systems/devtools-ds/commits?author=ShelbyCohen" title="Code">💻</a> <a href="#design-ShelbyCohen" title="Design">🎨</a> <a href="https://github.com/design-systems/devtools-ds/commits?author=ShelbyCohen" title="Documentation">📖</a> <a href="https://github.com/design-systems/devtools-ds/commits?author=ShelbyCohen" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://github.com/kharrop"><img src="https://avatars.githubusercontent.com/u/24794756?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Kelly Harrop</b></sub></a><br /><a href="#design-kharrop" title="Design">🎨</a></td>
    <td align="center"><a href="http://hipstersmoothie.com/"><img src="https://avatars.githubusercontent.com/u/1192452?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Andrew Lisowski</b></sub></a><br /><a href="https://github.com/design-systems/devtools-ds/commits?author=hipstersmoothie" title="Documentation">📖</a> <a href="#example-hipstersmoothie" title="Examples">💡</a> <a href="https://github.com/design-systems/devtools-ds/commits?author=hipstersmoothie" title="Code">💻</a></td>
    <td align="center"><a href="http://adrian.delarosab.me/"><img src="https://avatars.githubusercontent.com/u/1523379?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Adrian de la Rosa</b></sub></a><br /><a href="https://github.com/design-systems/devtools-ds/commits?author=mormubis" title="Code">💻</a> <a href="https://github.com/design-systems/devtools-ds/commits?author=mormubis" title="Documentation">📖</a> <a href="#example-mormubis" title="Examples">💡</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
