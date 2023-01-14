import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";

export const SettingsSVG = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a-setting)">
      <Path
        d="M2.213 14.06a9.945 9.945 0 0 1 0-4.12c1.11.13 2.08-.237 2.396-1.001.317-.765-.108-1.71-.986-2.403a9.945 9.945 0 0 1 2.913-2.913c.692.877 1.638 1.303 2.403.986.765-.317 1.132-1.286 1-2.396a9.945 9.945 0 0 1 4.12 0c-.13 1.11.238 2.08 1.002 2.396.765.317 1.71-.108 2.403-.986a9.945 9.945 0 0 1 2.913 2.913c-.877.692-1.303 1.638-.986 2.403.317.765 1.286 1.132 2.396 1.001a9.945 9.945 0 0 1 0 4.12c-1.11-.13-2.08.237-2.396 1.001-.317.765.108 1.71.986 2.403a9.945 9.945 0 0 1-2.913 2.913c-.692-.877-1.638-1.303-2.403-.986-.765.317-1.132 1.286-1.001 2.396a9.945 9.945 0 0 1-4.12 0c.13-1.11-.237-2.08-1.001-2.396-.765-.317-1.71.108-2.403.986a9.944 9.944 0 0 1-2.913-2.913c.877-.692 1.303-1.638.986-2.403-.317-.765-1.286-1.132-2.396-1.001ZM4 12.21c1.1.305 2.007 1.002 2.457 2.086.449 1.085.3 2.22-.262 3.212.096.102.195.201.297.297.993-.562 2.127-.71 3.212-.262 1.084.45 1.78 1.357 2.086 2.457.14.004.28.004.42 0 .305-1.1 1.002-2.007 2.086-2.457 1.085-.449 2.22-.3 3.212.262.102-.096.2-.195.297-.297-.562-.993-.71-2.127-.262-3.212.45-1.084 1.357-1.781 2.457-2.086.004-.14.004-.28 0-.42-1.1-.305-2.007-1.002-2.457-2.086-.45-1.085-.3-2.22.262-3.212a7.96 7.96 0 0 0-.297-.297c-.993.562-2.127.71-3.212.262C13.212 6.007 12.515 5.1 12.21 4a7.926 7.926 0 0 0-.42 0c-.305 1.1-1.002 2.007-2.086 2.457-1.085.449-2.22.3-3.212-.262a6.932 6.932 0 0 0-.297.297c.562.993.71 2.127.262 3.212C6.007 10.788 5.1 11.485 4 11.79c-.004.14-.004.28 0 .42ZM12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
        fill="#E1E8F4"
      />
    </G>
    <Defs>
      <ClipPath id="a-setting">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export const PlusSVG = (props: SvgProps) => (
  <Svg
    width={30}
    height={30}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a-plus)">
      <Path
        d="M13.75 13.75v-7.5h2.5v7.5h7.5v2.5h-7.5v7.5h-2.5v-7.5h-7.5v-2.5h7.5Z"
        fill="#06090F"
      />
    </G>
    <Defs>
      <ClipPath id="a-plus">
        <Path fill="#fff" d="M0 0h30v30H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export const Blob1SVG = (props: SvgProps) => (
  <Svg
    width={182}
    height={208}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M13 0h169v200.745s-75.952 9.961-94.095-94.626S13 0 13 0Z"
      fill="#955F90"
      fillOpacity={0.75}
    />
    <Path
      d="M1.777 8H182v200s.33-90.076-100.344-94.275C-19.018 109.527 1.777 8 1.777 8Z"
      fill="#9EB3C2"
    />
  </Svg>
);

export const Blob2SVG = (props: SvgProps) => (
  <Svg
    width={257}
    height={202}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M.599.48h179.388v200.306s-80.62 9.939-99.879-94.419C60.85 2.009.598.48.598.48ZM359.376 200.561H179.988V.254s80.621-9.938 99.879 94.42c19.258 104.358 79.509 105.887 79.509 105.887Z"
      fill="#955F90"
      fillOpacity={0.75}
    />
  </Svg>
);

export const Blob3SVG = (props: SvgProps) => (
  <Svg
    width={108}
    height={215}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M.332 214.166a106.993 106.993 0 0 0 75.612-31.457A106.997 106.997 0 0 0 98.957 66.065 107 107 0 0 0 0 .166l.166 107 .166 107Z"
      fill="#9EB3C2"
    />
  </Svg>
);

export const AddCardSVG = (props:SvgProps) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="none"
      viewBox="0 0 30 30"
    >
      <Path
        stroke="#955F90"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M15 26.562c6.385 0 11.563-5.176 11.563-11.562 0-6.385-5.178-11.563-11.563-11.563C8.615 3.437 3.437 8.615 3.437 15c0 6.386 5.178 11.562 11.563 11.562z"
        clipRule="evenodd"
      ></Path>
      <Path
        stroke="#955F90"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M13.197 19.339L17.555 15l-4.358-4.339"
      ></Path>
    </Svg>
  );
}

export const AparatIcon = (props:SvgProps) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="27"
      height="27"
      fill="none"
      viewBox="0 0 21 21"
    >
      <G clipPath="url(#clip0_10_53)">
        <Path
          fill="#FFF2F2"
          d="M8.6 4.375l-1.75 1.75H3.5v10.5h14v-10.5h-3.35l-1.75-1.75H8.6zm-.725-1.75h5.25l1.75 1.75h3.5a.875.875 0 01.875.875V17.5a.875.875 0 01-.875.875H2.625a.875.875 0 01-.875-.875V5.25a.875.875 0 01.875-.875h3.5l1.75-1.75zM10.5 15.75a4.813 4.813 0 110-9.625 4.813 4.813 0 010 9.625zm0-1.75a3.063 3.063 0 100-6.125 3.063 3.063 0 000 6.125z"
        ></Path>
      </G>
      <Defs>
        <ClipPath id="clip0_10_53">
          <Path fill="#fff" d="M0 0H21V21H0z"></Path>
        </ClipPath>
      </Defs>
    </Svg>
  );

}
