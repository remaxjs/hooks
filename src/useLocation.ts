import * as React from "react";
import { getLocation } from "remax/alipay";
import "@remax/mini-types";

export default function useLocation(options: my.IGetLocationOptions) {
  const [data, setData] = React.useState<my.IGetLocationSuccessResult>();
  const [error, setError] = React.useState<my.IGetLocationFailResult>();

  React.useEffect(() => {
    (async () => {
      try {
        const res = await getLocation(options);
        setData(res);
      } catch (e) {
        setError(e);
      }
    })();
  });

  return {
    data,
    error
  };
}
