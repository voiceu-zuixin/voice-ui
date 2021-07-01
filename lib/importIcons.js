// 用于动态添加svg等文件
let importAll = (requireContext) => requireContext.keys().forEach(requireContext )

// 测试环境下不支持非静态引入，所以要try catch
try{
    importAll(require.context('./icons',true,/\.svg$/))
}catch(error){
    console.log(error);
}