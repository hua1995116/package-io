# package-io

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

# API

[doc](doc/modules/_index_.md)

# License

MIT

Copyright (c) 2018 蓝色的秋风