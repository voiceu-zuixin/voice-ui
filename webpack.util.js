const fs = require('fs')
const glob = require("glob")
const path = require("path")

const entry = glob
    .sync("lib/**/*.js")
    .reduce((acc, curr) => {
        return {...acc, [path.basename(curr, ".js")]: curr}
    })
export default entry