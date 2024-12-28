// src/Container.tsx
import styled from "styled-components";
import { Fragment, jsx } from "react/jsx-runtime";
var Container = ({ children }) => {
  const StyledContainerDiv = styled.div`
    max-width: 1200px;
    margin: auto;
    @media (max-width: 1200px) {
      max-width: 1000px;
    }
    @media (max-width: 1000px) {
      max-width: 100%;
    }
  `;
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(StyledContainerDiv, { children }) });
};
var Container_default = Container;

// src/ModalCenter.tsx
import { XIcon } from "lucide-react";
import ReactDOM from "react-dom";
import { useTheme } from "styled-components";
import { Fragment as Fragment2, jsx as jsx2, jsxs } from "react/jsx-runtime";
var ModalCenter = ({ closeModal, children, showModal }) => {
  const theme = useTheme();
  if (showModal) {
    return ReactDOM.createPortal(
      /* @__PURE__ */ jsx2(
        "div",
        {
          style: {
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            zIndex: 2e3,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#535353"
          },
          onClick: closeModal,
          children: /* @__PURE__ */ jsxs(
            "div",
            {
              style: {
                backgroundColor: "none",
                width: "90%",
                maxWidth: "1200px",
                height: "90%",
                margin: "auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
              },
              children: [
                /* @__PURE__ */ jsx2(
                  "div",
                  {
                    style: {
                      color: "white",
                      display: "flex",
                      flexDirection: "row-reverse",
                      paddingBottom: "8px",
                      cursor: "pointer"
                    },
                    onClick: closeModal,
                    children: /* @__PURE__ */ jsx2(XIcon, {})
                  }
                ),
                /* @__PURE__ */ jsx2(
                  "div",
                  {
                    style: {
                      backgroundColor: theme.color.background.level2,
                      maxHeight: "90%",
                      overflowY: "scroll",
                      borderRadius: "8px",
                      padding: "18px",
                      marginBottom: "40px"
                      // reserve for mobile device bottom button
                    },
                    onClick: (e) => e.stopPropagation(),
                    children
                  }
                )
              ]
            }
          )
        }
      ),
      document.body
      // With CreatePortal, Render outside the parent, directly into the <body>
    );
  } else {
    return /* @__PURE__ */ jsx2(Fragment2, {});
  }
};
var ModalCenter_default = ModalCenter;

// src/designtoken.tsx
var palette = {
  white: "#FFFFFF",
  black: "#000000 ",
  slate: {
    50: "#f8fafc",
    100: "#f1f5f9",
    200: "#e2e8f0",
    300: "#cbd5e1",
    400: "#94a3b8",
    500: "#64748b",
    600: "#475569",
    700: "#334155",
    800: "#1e293b",
    900: "#0f172a",
    950: "#020617"
  },
  gray: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#3f3f46",
    800: "#27272a",
    900: "#18181b",
    950: "#09090b"
  }
};
var lightMode = {
  color: {
    palette,
    background: {
      default: palette.white,
      level1: palette.slate[50],
      level2: palette.slate[200],
      hover1: palette.slate[100],
      hover2: palette.slate[200]
    },
    border: {
      default: "#e6e6e6",
      level1: palette.slate[200]
    },
    text: {
      default: palette.slate[900],
      header: palette.slate[900],
      content: palette.slate[600],
      label: palette.slate[600],
      label1: palette.gray[300],
      label2: palette.gray[300]
    }
  }
};
var darkMode = {
  color: {
    palette,
    background: {
      default: palette.gray[950],
      level1: "#181818",
      level2: "#202020",
      hover1: "#222222",
      hover2: palette.gray[900]
    },
    border: {
      default: "#181818",
      level1: "#222222"
    },
    text: {
      default: "#FAFAFA",
      header: palette.white,
      content: palette.slate[100],
      label: palette.slate[500],
      label1: palette.gray[700],
      label2: palette.gray[800]
    }
  }
};
export {
  Container_default as Container,
  ModalCenter_default as ModalCenter,
  darkMode,
  lightMode
};
//# sourceMappingURL=index.mjs.map