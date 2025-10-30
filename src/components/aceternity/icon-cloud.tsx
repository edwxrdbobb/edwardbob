'use client';

import { useEffect, useMemo, useState } from "react";
import { useTheme } from "../ThemeProvider";

export type IconCloudProps = {
  iconSlugs: string[];
};

const cloudProps = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
  },
};

export type DynamicCloudProps = {
  iconSlugs: string[];
  imageArray?: any;
};

export const renderCustomIcon = (icon: any, theme: string) => {
  const bgHex = theme === "light" ? "#f3f2ef" : "#080510";
  const fallbackHex = theme === "light" ? "#6e6e73" : "#ffffff";
  const minContrastRatio = theme === "dark" ? 2 : 1.2;

  return icon;
};

export default function IconCloud({ iconSlugs }: IconCloudProps) {
  const [data, setData] = useState<any>(null);
  const { theme } = useTheme();

  useEffect(() => {
    async function loadCloud() {
      try {
        const { Cloud, fetchSimpleIcons, renderSimpleIcon } = await import(
          "react-icon-cloud"
        );

        const simpleIcons = await fetchSimpleIcons({ slugs: iconSlugs });

        const renderedIcons = Object.values(simpleIcons.simpleIcons).map(
          (icon: any) =>
            renderSimpleIcon({
              icon,
              bgHex: theme === "light" ? "#f3f2ef" : "#080510",
              fallbackHex: theme === "light" ? "#6e6e73" : "#ffffff",
              minContrastRatio: theme === "dark" ? 2 : 1.2,
              size: 42,
              aProps: {
                href: undefined,
                target: undefined,
                rel: undefined,
                onClick: (e: any) => e.preventDefault(),
              },
            })
        );

        setData({ Cloud, renderedIcons });
      } catch (error) {
        console.error("Error loading icon cloud:", error);
      }
    }

    loadCloud();
  }, [iconSlugs, theme]);

  if (!data) {
    return (
      <div className="flex items-center justify-center w-full h-96">
        <div className="text-muted-foreground">Loading...</div>
      </div>
    );
  }

  const { Cloud, renderedIcons } = data;

  return (
    <Cloud {...cloudProps}>
      {renderedIcons}
    </Cloud>
  );
}
