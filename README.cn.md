## 微信小程序模板

一切为了：瘦身，瘦身，瘦身

### 简介

通过采用 rollup 对项目预先进行构建，合并所有页面代码到 app.js，并将 APP 替换成 __app :

```jsx
    __page(1)({ ... });
    function __page(routeIndex) {
        return function(e) {
            getApp().__pages[routeIndex] = function() {
                Page(e)
            }
        }
    }
```

实际页面的代码则相应变成调用 :

```jsx
    getApp().__run(0);
```

以此减小最终构建的小程序体积——页面越多，瘦身效果越明显。


### 使用

用 rollup 构建 src 源码到 dist 内

```shell
    git clone git@github.com:gogoyqj/wechatAppBoilerplate.git projectPath;
    cd projectPath;
    npm install;
    // make changes
    xxx
    // build
    sh init.sh;
```

### 项目结构 

#### src

项目源码

```shell
    src/app.js
    src/app.json
```

#### dist

对应“微信 web 开发者工具”内“添加项目”时的“项目目录”，如果不采用本模板提供的打包解决方案，则应选择 src 目录。