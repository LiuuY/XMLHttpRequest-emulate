# xmlHttpRequest-emulate

Emulate the browser XMLHttpRequest object.

Inspired by [React Native](https://github.com/facebook/react-native) and [node-XMLHttpRequest](https://github.com/driverdan/node-XMLHttpRequest)

### 目的

在 WebView 中截拦 XMLHttpRequest, 可以转发到原生，再有原生发送请求。即在不修改前端代码的情况下（不影响 axios 等库的使用）便可截拦转发请求到原生。

实际的请求（JSAPI），需要实现 `mockNetworking.ts`中的接口。

### 构建

```javascript
yarn build
```

### 测试

```javascript
yarn test
```
