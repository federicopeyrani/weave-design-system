import { BaseComponentProps } from "@/components/BaseComponentProps";
import Component from "@/components/Component/Component";
import {
  floodColor,
  grainyFilterClassName,
} from "@/components/GrainyFilter/GrainyFilter.css";

export type GrainyFilterProps = BaseComponentProps & {
  size?: number;
  width?: number;
  height?: number;
  viewBoxSize?: number;
  viewBoxWidth?: number;
  viewBoxHeight?: number;
  baseFrequency?: string | number;
  numOctaves?: string | number;
  amount?: string | number;
  bias?: string | number;
};

const GrainyFilter: React.FC<GrainyFilterProps> = ({
  baseFrequency = "0.65",
  numOctaves = "3",
  amount = "20",
  bias = "-10",
  size = 100,
  width,
  height,
  viewBoxSize,
  viewBoxWidth,
  viewBoxHeight,
  ...props
}) => {
  const resolvedWidth = width || size;
  const resolvedHeight = height || size;
  const resolvedViewBoxWidth = viewBoxWidth || viewBoxSize || resolvedWidth;
  const resolvedViewBoxHeight = viewBoxHeight || viewBoxSize || resolvedHeight;

  const viewBox = `0 0 ${resolvedViewBoxWidth} ${resolvedViewBoxHeight}`;

  return (
    <Component
      as="svg"
      _className={grainyFilterClassName}
      width={resolvedWidth}
      height={resolvedHeight}
      viewBox={viewBox}
      {...props}
    >
      <filter id="crispy-filter">
        <feTurbulence
          type="fractalNoise"
          baseFrequency={baseFrequency}
          numOctaves={numOctaves}
          result="noise"
        />
        <feFlood floodColor={floodColor} result="colored-noise" />
        <feComposite
          operator="in"
          in="colored-noise"
          in2="noise"
          result="crispy-noise"
        />
        <feColorMatrix
          type="matrix"
          values={`1 0 0 0 0
                   0 1 0 0 0
                   0 0 1 0 0
                   0 0 0 ${amount} ${bias}`}
          in="crispy-noise"
          result="final-noise"
        />
      </filter>

      <rect width="100%" height="100%" filter="url(#crispy-filter)" />
    </Component>
  );
};

export default GrainyFilter;
