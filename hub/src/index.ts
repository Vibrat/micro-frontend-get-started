// As of micro-frontend loads via asynchronous import, it is necessary to import styleguide first to prevent DOM repaint
import('styleguide/base').then(() => {
  // Use dynamic import here to allow webpack to interface with module federation code
  import("./app");
  import("./app2");
});
