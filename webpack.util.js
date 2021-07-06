const fs = require('fs')
const path = require("path")
const glob = require("glob")

const entry = glob
    .sync("lib/**/*.js")
    .reduce((acc, curr) => {
        return {...acc, [path.basename(curr, ".js")]: curr}
    })


export default entry