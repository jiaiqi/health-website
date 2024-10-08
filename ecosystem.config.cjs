module.exports = {
  apps: [
    {
      name: 'health-website', // 启动项目名称，随便取，一般为项目名
      exec_mode: 'cluster',
      instances: 'max', // 进程数
      port: '3366', // 端口，根据需要指定
      script: './.output/server/index.mjs', // 启动入口，相对于 .output 目录的路径
      args: 'start',
      env: {
        MODE: 'production',
      },
    },
  ],
}
