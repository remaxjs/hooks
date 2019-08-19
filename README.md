# remax-hooks

小程序 API 的 hooks 封装。

## 示例

```javascript
import * as React from 'react';
import { View } from 'remax/alipay';
import { useAuthCode } from 'remax-hooks/alipay';

export default () => {
  const [res, error] = useAuthCode();

  return <View>{!error ? res.authCode : '授权失败'}</View>;
};
```
