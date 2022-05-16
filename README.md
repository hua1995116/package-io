<p style="text-align: center">
    <img src="./logo/logo.png" width="220px">
</p>


> It's a helper for operator package.json

# Usage

```shell
npm install package-io
```


```javascript
const {pkgRead, pkgUpdate} = require('package-io');

const data = pkgRead();

pkgUpdate(Object.assign(data, {name: "my favorite"}));
```

# API Reference

## Functions

<dl>
<dt><a href="#pkgRead">pkgRead([url])</a> ⇒ <code>Object</code></dt>
<dd><p>return pkg context</p>
</dd>
<dt><a href="#pkgUpdate">pkgUpdate(url, data)</a></dt>
<dd><p>update your pkg</p>
</dd>
<dt><a href="#pkgPath">pkgPath([url])</a> ⇒ <code>string</code></dt>
<dd><p>get path form your workSpace</p>
</dd>
</dl>

<a name="pkgRead"></a>

## pkgRead([url]) ⇒ <code>Object</code>
return pkg context

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| [url] | <code>string</code> | package.json path |

<a name="pkgUpdate"></a>

## pkgUpdate(url, data)
update your pkg

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | package.json path |
| data | <code>Object</code> | cover data |

<a name="pkgPath"></a>

## pkgPath([url]) ⇒ <code>string</code>
get path form your workSpace

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| [url] | <code>string</code> | package.json path |


# License

MIT

Copyright (c) 2018 蓝色的秋风