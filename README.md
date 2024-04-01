## Caveat

The setup:

- app1 and app2 stay in one project.
- app3 stays in a seperate project that is bundled together with app1, app2 via webpack module federation.
- all apps share a redux store that live in `window.store`

Currently HMR does not work with Module Federation, this make reloading throw errors from browser. We suggest development by building local store for each repository then plug then in central store for final testing.

