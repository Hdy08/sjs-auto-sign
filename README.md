# sjs-auto-sign

sjs 自动签到用户脚本，用于在支持的 sjs / k_misign 签到页面自动完成每日签到。

## 功能

- 打开签到页后自动检测是否已签到。
- 自动获取 `formhash` 并调用签到接口。
- 使用 `localStorage` 记录当天签到状态，避免重复请求。
- 页面保持打开时，会在北京时间 0 点前 8 秒校准剩余时间，并在 0 点后自动尝试下一次签到。
- 支持 `k_misign-sign.html` 和 `plugin.php?id=k_misign:sign` 两种签到页地址。

## 安装

1. 安装用户脚本管理器，例如 Tampermonkey 或 Violentmonkey。
2. 打开脚本文件：
   <https://raw.githubusercontent.com/Hdy08/sjs-auto-sign/master/sjs-auto-sign.js>
3. 在脚本管理器中确认安装。
4. 登录对应站点，并打开签到页，脚本会自动运行。

## 支持站点

脚本当前匹配以下域名和页面：

- `sjs*.com`
- `sjs*.net`
- `sjslt.cc`
- `xsijishe.ink`
- `xsijishe.net`

匹配页面：

- `/k_misign-sign.html`
- `/plugin.php?id=k_misign:sign`

## 使用说明

安装后无需额外配置。访问支持的签到页时，脚本会自动执行签到逻辑，并在浏览器控制台输出运行状态。

如果脚本提示未找到 `formhash`，通常表示尚未登录、当前页面不是签到页，或站点页面结构发生了变化。

## 注意事项

- 脚本依赖当前浏览器登录状态，不会保存账号或密码。
- 自动签到只在匹配的站点页面中运行。
- 若浏览器关闭或签到页未保持打开，0 点定时签到不会执行；再次打开签到页时仍会自动检测并签到。

## 许可

仅供个人学习和自用。
