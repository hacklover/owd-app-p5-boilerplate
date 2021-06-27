# p5.js boilerplate for OWD Client
> Start to draw on a canvas element with p5.js

<p>
    <img src="media/demo.png" alt="OWD p5 boilerplate module demo" />
</p>

<p>
    <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-green.svg" /></a>
    <a href="https://github.com/owdproject/owd-client"><img src="https://img.shields.io/badge/owd-client-3A9CB6" /></a>
    <a href="https://github.com/topics/owd-modules"><img src="https://img.shields.io/badge/owd-modules-888" /></a>
    <a href="https://hacklover.net/patreon"><img src="https://img.shields.io/badge/become-a%20patron-orange" alt="Become a Patron" /></a>
    <a href="https://hacklover.net/discord"><img src="https://img.shields.io/badge/chat-on%20discord-7289da.svg" alt="Join us on Discord" /></a>
</p>

## Quick install
- Move to your client folder, then
  ```
  # Enter modules app directory
  cd src/modules/app/
  
  # Clone this repository
  git clone https://github.com/hacklover/owd-app-p5-boilerplate p5-boilerplate
  
  # Install dependencies using Yarn, or Npm
  yarn add p5
  npm install p5
  ```
- Define this module in `owd-client/client.extensions.ts`
  ```js
  import AboutModule from "@owd-client/core/src/modules/app/about";
  import DebugModule from "@owd-client/core/src/modules/app/debug";
  import P5BoilerplateModule from "~/modules/app/p5-boilerplate/client";

  export default {
    app: {
      modules: [
        AboutModule,
        DebugModule,
        P5BoilerplateModule,
      ]
    },
    ...
  ```
- Add this code to `owd-client/vite.config.ts`
  ```
  optimizeDeps: {
    include: ['p5']
  }
  ```

## Dependencies
- p5

## Compatibility
- Open Web Desktop client v2.0.0-beta.1

## License
This project is released under the [MIT License](LICENSE)