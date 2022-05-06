import * as React from "react";
import { SVGProps } from "react";

const SvgStarEmpty = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="m12 6.76 1.379 4.246h4.465l-3.612 2.625 1.379 4.246L12 15.252l-3.612 2.625 1.379-4.246-3.612-2.625h4.465L12 6.76zm0-6.472L9.167 9.006H0l7.416 5.389-2.833 8.718L12 17.725l7.416 5.388-2.833-8.718L24 9.006h-9.167L12 .288z" />
  </svg>
);

export default SvgStarEmpty;
