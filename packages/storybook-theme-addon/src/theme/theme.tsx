import React from "react";
import { useAddonState, useParameter } from "@storybook/api";
import { useAddonState as useClientAddonState } from "@storybook/client-api";
import { Theme, ColorScheme, ThemeProvider } from "@iampava-devtools-ds/themes";
import { chrome, firefox } from "@iampava-devtools-ds/themes";
import {
  IconButton,
  WithTooltip,
  TooltipLinkList,
} from "@storybook/components";
import Chrome from "./icons/chrome";
import FireFox from "./icons/firefox";

import { THEME_SELECT_TOOL_ID, PARAMETER_NAME } from "../constants";

const isWindowDefined = typeof window !== "undefined";

interface TooltipProps {
  /** Called when the tooltip hides */
  onHide: () => void;
}

const themes = {
  chrome: {
    name: "Chrome",
    icon: <Chrome />,
  },
  firefox: {
    name: "FireFox",
    icon: <FireFox />,
  },
} as const;

interface State {
  theme: Theme;
  colorScheme: ColorScheme;
}

const STORAGE_TOKEN = `${THEME_SELECT_TOOL_ID}-storage`;

/** Persist the theme settings in localStorage */
const saveLocalStorage = (data: State) => {
  if (!isWindowDefined) {
    return;
  }

  window.localStorage.setItem(STORAGE_TOKEN, JSON.stringify(data));
};

/** Restore theme settings from localStorage */
const restoreLocalStorage = (defaultTheme?: Partial<State>): State => {
  const data = isWindowDefined
    ? window.localStorage.getItem(STORAGE_TOKEN)
    : undefined;

  if (data) {
    const storedTheme = JSON.parse(data) as State;

    if (themes[storedTheme.theme]) {
      return storedTheme;
    }
  }

  return {
    theme: "chrome",
    colorScheme: "light",
    ...defaultTheme,
  };
};

export const ThemeTool = () => {
  const defaultState = useParameter<Partial<State>>(PARAMETER_NAME, {
    theme: "chrome",
    colorScheme: "light",
  });
  const initial = restoreLocalStorage(defaultState);
  const [state, setState] = useAddonState<State>(THEME_SELECT_TOOL_ID, initial);

  const saveState = (s: State) => {
    setState(s);
    saveLocalStorage(s);
  };

  return (
    <WithTooltip
      closeOnClick
      placement="top"
      trigger="click"
      tooltip={(props: TooltipProps) => {
        const { onHide } = props;

        return (
          <TooltipLinkList
            links={(Object.keys(themes) as Array<Theme>).flatMap((key) => {
              const theme = themes[key];
              return [
                {
                  id: `${theme.name}-light`,
                  title: `${theme.name} - Light`,
                  onClick: () => {
                    saveState({
                      theme: key,
                      colorScheme: "light",
                    });
                    onHide();
                  },
                  value: theme.name,
                  left: <div>{theme.icon}</div>,
                  active: key === state.theme && state.colorScheme === "light",
                },
                {
                  id: `${theme.name}-dark`,
                  title: `${theme.name} - Dark`,
                  onClick: () => {
                    saveState({
                      theme: key,
                      colorScheme: "dark",
                    });
                    onHide();
                  },
                  value: theme.name,
                  left: <div>{theme.icon}</div>,
                  active: key === state.theme && state.colorScheme === "dark",
                },
              ];
            })}
          />
        );
      }}
    >
      <IconButton title="Select a product theme">
        <span style={{ width: "13.5px" }}>{themes[state.theme].icon}</span>
      </IconButton>
    </WithTooltip>
  );
};

export const ThemeDecorator = (
  storyFn: (storyParams: Record<string, any>) => React.ReactNode
) => {
  const [state] = useClientAddonState<State>(THEME_SELECT_TOOL_ID);
  const loadedState = state || restoreLocalStorage();

  const themeObject = loadedState.theme === "chrome" ? chrome : firefox;

  const isLight = loadedState.colorScheme === "light";
  const backgroundColor = isLight
    ? themeObject.light.backgroundColor
    : themeObject.dark.backgroundColor;
  const color = isLight
    ? themeObject.light.textColor
    : themeObject.dark.textColor;

  return (
    <ThemeProvider
      theme={loadedState.theme}
      colorScheme={loadedState.colorScheme}
    >
      <div
        className={`theme-wrapper ${loadedState.colorScheme}`}
        style={{ backgroundColor, color, minHeight: "90%", padding: "20px" }}
      >
        {storyFn({ args: loadedState })}
      </div>
    </ThemeProvider>
  );
};
