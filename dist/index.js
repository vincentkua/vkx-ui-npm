"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// index.ts
var index_exports = {};
__export(index_exports, {
  Container: () => Container_default,
  ModalCenter: () => ModalCenter_default,
  darkMode: () => darkMode,
  lightMode: () => lightMode
});
module.exports = __toCommonJS(index_exports);

// src/Container.tsx
var import_styled_components = __toESM(require("styled-components"));
var import_jsx_runtime = require("react/jsx-runtime");
var Container = ({ children }) => {
  const StyledContainerDiv = import_styled_components.default.div`
    max-width: 1200px;
    margin: auto;
    @media (max-width: 1200px) {
      max-width: 1000px;
    }
    @media (max-width: 1000px) {
      max-width: 100%;
    }
  `;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledContainerDiv, { children }) });
};
var Container_default = Container;

// src/ModalCenter.tsx
var import_lucide_react = require("lucide-react");
var import_react_dom = __toESM(require("react-dom"));
var import_styled_components2 = require("styled-components");
var import_jsx_runtime2 = require("react/jsx-runtime");
var ModalCenter = ({ closeModal, children, showModal }) => {
  const theme = (0, import_styled_components2.useTheme)();
  if (showModal) {
    return import_react_dom.default.createPortal(
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
          children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
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
                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
                    children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_lucide_react.XIcon, {})
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_jsx_runtime2.Fragment, {});
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Container,
  ModalCenter,
  darkMode,
  lightMode
});
//# sourceMappingURL=index.js.map