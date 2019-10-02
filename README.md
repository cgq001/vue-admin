# suyuan-admin

## 初始化
```
yarn install
```

### 运行
```
yarn run serve
```

### 打包
```
yarn run build
```

### 测试
```
yarn run test
```
###  账号、密码
> 随便写，只要大于3位且小于16位

###  配置权限 
> 见 管理员——>管理员列表

###  导出Excel
> 见 管理员——>添加管理员

###  关于权限配置
>这里使用element-ui库的  Tree 树形控件组件，要求数据格式自行查阅 UI库官网
> 将路由信息对象 作为树形控件组件渲染出来，供管理员选择，然后上传服务器 选择后 获得的 key值 所组成是数组
> 根据 后台返回的key值数组 去  路由数组 中筛选出对应的路由信息对象，并将其添加至路由信息对象中  方法addRouter  详见 srv->router->index.js表




### 导出EXcel
```
 let idList=[
            {
                nickname: 'Nick',
                name: '找好的呢',
                idcard: '15662564'
            }
    ]
          
import("@/vendor/Export2Excel").then(excel => {
         const tHeader = [
                "昵称",
                "真实姓名",
                "身份证号码",
                ];
        const filterVal = [
                "nickname",
                "name",
                "idcard",
                ];
    excel.export_json_to_excel2(tHeader, idList, filterVal, "主播认证");
            
});
```

