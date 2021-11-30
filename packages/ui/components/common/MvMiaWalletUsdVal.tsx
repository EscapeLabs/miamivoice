import React, { memo, useEffect, useLayoutEffect, useState } from "react";
import { getMiaUsdValue } from "../../lib/utils";

import MvLoader from "../app/MvLoader";

const MvMiaWalletUsdVal: React.FC = () => {
  const [value, setValue] = useState('');
  useLayoutEffect(() => {
    const fetchMiaUsd = async () => {
      const result = await getMiaUsdValue();
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(result);
      setValue(formatted);
    };
    fetchMiaUsd();
  }, []);

  return <>
    {value}
  </>;
};
export default memo(MvMiaWalletUsdVal);
