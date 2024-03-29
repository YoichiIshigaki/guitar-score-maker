import * as React from "react";
import { SVGProps } from "react";

const SvgStarHalf = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="m12 5.173 2.335 4.817 5.305.732-3.861 3.71.942 5.27L12 17.178V5.173zm0-4.586L8.332 8.155 0 9.306l6.064 5.828-1.48 8.279L12 19.446l7.416 3.966-1.48-8.279L24 9.306l-8.332-1.15L12 .587z" />
  </svg>
);

export default SvgStarHalf;
