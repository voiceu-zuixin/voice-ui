interface Options {
    extra: string | undefined
}


// function scopedClassMaker(prefix: string) {
//     return function scopedClass(name?: string, options?: Options) {
//         const result = [prefix, name].filter(Boolean).join('-')
//         if ((options && options.extra)) {
//             return [result, options && options.extra].filter(Boolean).join(' ')
//         } else {
//             return result
//         }
//     }
// }

// export { scopedClassMaker }

interface ClassToggles {
    [K: string]: boolean
}

const scopedClassMaker = (prefix: string) =>
    (name: string | ClassToggles, options?: Options) =>
        Object
            .entries(name instanceof Object ? name : { [name]: name })
            .filter(kv => kv[1] !== false)
            .map(kv => kv[0])
            .map(name => [prefix, name]
                .filter(Boolean)
                .join('-'))
            .concat(options && options.extra || [])
            .join(' ');

export { scopedClassMaker };

