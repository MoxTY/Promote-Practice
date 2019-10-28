# 游云南官方小程序



## 开发资源
APPID: 	wx1c2e7f613a01e182
原始ID:	gh_ddbf288735d6


## 代码仓库
https://git.ybsjyyn.com/yyn/mp-yyn-2.0.git


## TAPD
https://www.tapd.cn/20722351/markdown_wikis/#1120722351001008666


## 设计资源（zeplin）
https://app.zeplin.io/project/5c52ca2ebcdb4a3583db2bf0/dashboard





## 开发配置

#### 1. 安装wepy-cli
检查是否安装`wepy -v`
安装`npm install wepy-cli -g`

#### 2. `npm  install`

#### 3. `npm run dev`

#### 4. dist目录导入IDE

#### 5. IDE配置
关闭"ES6 转 ES5"
关闭自动补全
关闭自动压缩混淆




## 分包策略
https://www.tapd.cn/20722351/markdown_wikis/#1120722351001010277


## 页面路径
https://www.tapd.cn/20722351/markdown_wikis/#1120722351001010270



## 环境切换（链接服务器环境、支付环境）
测试入口切换


## 打包规范（注意这里的环境变量与环境切换的区别吗，打包的环境变量与链接服务器环境无关！）
开发时使用 ```npm run dev```  环境变量为 wepy.$appConfig.env = 'dev'
体验/发布 ```npm run build```  环境变量为 wepy.$appConfig.env = 'prod'


## redux规范
1.每个请求的action应包括request、success、faiture、clean四种，在不需要全局持有数据时，需要在页面的onUnload()方法中clean
2.每个请求的数据状态应包括实际数据、是否展示loading数据、网络错误标示数据、业务错误msg数据








### 如有疑问，请联系Leo童鞋!!!


