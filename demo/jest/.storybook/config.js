import { configure } from '@kadira/storybook';

const req = require.context('../components', true, /story\.jsx$/)
console.log("req", req.keys());
function loadStories() {
  req.keys().forEach(req)
}

configure(loadStories, module);
