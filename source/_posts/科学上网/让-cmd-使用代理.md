---
title: 让 cmd 使用代理
date: 2021-12-23 17:41:40
categories:
  - 科学上网
tags:
  - 科学上网
abbrlink: 91f51ab4
---
通过cmd命令行执行某些命令时，如果这些命令去国外站点下载什么文件或是获取点什么信息，却下载不下来的时候，要么报错要么卡在哪一动不动，我们就只能科学上网了。  
类似于ShadowSocks、v2ray这类工具尽管开启了全局代理，但是cmd里依旧无法下载成功。  
因为这种全局代理只针对使用IE代理的程序才会全局，不是像VPN那样的全局。当然也更不支持PAC模式了。

<!-- more -->

---

## 开始

cmd如果要设置代理的话，需要在执行其他命令之前，先执行一下

```bash
set http_proxy=http://127.0.0.1:10809
set https_proxy=http://127.0.0.1:10809
```

同理如要设置WSL的代理也是一样的做法

```bash
export http_proxy=http://127.0.0.1:10809
export https_proxy=http://127.0.0.1:10809
```

* 注意：上面代理地址只是示例，请换成你自己的代理地址。并且只能使用http而不是socks5。
* 再次注意：上面的命令只是设置临时的环境变量，关闭窗口后即失效。

## 测试

设置完成后运行如下命令测试是否设置好了而不是`ping`命令。

```bash
curl https://www.google.com
```

应当类似于如下的返回内容：

![](https://img.lisir.me/image/posts/91f51ab4/001.png)
