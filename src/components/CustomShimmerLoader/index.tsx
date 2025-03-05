import { useEffect, useState } from "react";
import { Skeleton, Box } from "@mui/material";

interface CustomShimmerLoaderProps
  extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  loading: boolean;
  quantity?: number;
}
const CustomShimmerLoader = ({ children, loading = true, quantity = 1,}: CustomShimmerLoaderProps) => {
  const [loadingSkeleton, setLoadingSkeleton] = useState(loading);
  const [quantityRows, setQuantityRows] = useState([1]);

  useEffect(() => {
    // setTimeout(() => {
      setLoadingSkeleton(loading);
    // }, 3000);
  }, [loading]);

  useEffect(() => {
    const arrayNumber: number[] = new Array(quantity).fill(1).map((_, i) => i * 1);
    setQuantityRows(arrayNumber);
  }, [quantity]);

  return (
    <Box>
      {loadingSkeleton
        ? 
        quantityRows.map((row) => (
            <Box key={row}>
              <Skeleton variant="text" width="100%" sx={{ bgcolor: "grey" }} />
              <Skeleton variant="text" width="90%" sx={{ bgcolor: "grey" }} />
              <Skeleton variant="text" width="80%" sx={{ bgcolor: "grey" }} />
            </Box>
        ))
        : children}
    </Box>
  );
};

export default CustomShimmerLoader;
