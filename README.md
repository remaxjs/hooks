# remax-hooks

小程序 API 的 hooks 封装。

## 示例


### 不用 hooks

```javascript
import * as React from 'react';
import { View, getLocation } from 'remax/alipay';

export default () => {
  const [location, setLocation] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      try {
        const res = await getLocation({ type: 1 });
        setLocation(res);
      } catch(e) {
        setError(e);
      }
    })();
  }, []);

  return (
    <View>{!error ? <Text>{res ? res.city : '定位中...'}</Text> : '获取地理信息失败'}</View>
  );
};
```


### 用 hooks

```javascript
import * as React from 'react';
import { View } from 'remax/alipay';
import { useLocation } from 'remax-hooks/alipay';

export default () => {
  const [res, error] = useLocation({ type: 1 });

  return (
    <View>{!error ? <Text>{res ? res.city : '定位中...'}</Text> : '获取地理信息失败'}</View>
  );
};
```
