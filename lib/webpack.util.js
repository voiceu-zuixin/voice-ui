// const glob = require("glob")
// const path = require("path")

// const entry= glob
//     .sync("lib/**/*.js")
//     .reduce((acc, curr) => {
//         return { ...acc, [path.basename(curr, ".js")]: curr }
//     })
// export { entry }

const path = require('path');
const fs = require('fs');

// 定义视图页面路径
const viewsPath = path.resolve(__dirname, 'dist/lib');

// 定义入口
const entries = {};

const dirs = fs.readdirSync(viewsPath);
// 遍历多个入口
dirs.forEach(dir => {
	entries[dir] = `${viewsPath}/${dir}/index.js`
});

// export {entries}
export default entries
