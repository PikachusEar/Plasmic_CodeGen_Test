// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: eNceDkVszvmjFS7wKy9BUq
// Component: ORMPIqBKq95K
import * as React from "react";
import { useRouter } from "next/router";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  generateStateOnChangeProp,
  generateStateValueProp,
  renderPlasmicSlot,
  useDollarState
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import { BaseCheckbox } from "@plasmicpkgs/react-aria/skinny/registerCheckbox";
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: eNceDkVszvmjFS7wKy9BUq/projectcss
import sty from "./PlasmicCheckbox.module.css"; // plasmic-import: ORMPIqBKq95K/css
import CheckIcon from "./icons/PlasmicIcon__Check"; // plasmic-import: DCfQZBUR8D6E/icon
import MinusIcon from "./icons/PlasmicIcon__Minus"; // plasmic-import: PwBcVUJls1-7/icon

createPlasmicElementProxy;

export const PlasmicCheckbox__VariantProps = new Array();

export const PlasmicCheckbox__ArgProps = new Array(
  "value",
  "defaultSelected",
  "autoFocus",
  "disabled",
  "ariaLabel",
  "onChange",
  "label"
);

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicCheckbox__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(
    () =>
      Object.assign(
        {
          defaultSelected: false,
          autoFocus: false
        },
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );
  const $props = {
    ...args,
    ...variants
  };
  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "ariaCheckbox.isSelected",
        type: "readonly",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          $props["defaultSelected"],
        onChangeProp: "onChange"
      }
    ],

    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });
  const [$ccVariants, setDollarCcVariants] = React.useState({
    hovered: false,
    pressed: false,
    focused: false,
    focusVisible: false,
    indeterminate: false,
    disabled: false,
    selected: false,
    readonly: false
  });
  const updateVariant = React.useCallback(changes => {
    setDollarCcVariants(prev => {
      if (!Object.keys(changes).some(k => prev[k] !== changes[k])) {
        return prev;
      }
      return { ...prev, ...changes };
    });
  }, []);
  return (
    <BaseCheckbox
      data-plasmic-name={"ariaCheckbox"}
      data-plasmic-override={overrides.ariaCheckbox}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      aria-label={args.ariaLabel}
      autoFocus={args.autoFocus}
      className={classNames(
        "__wab_instance",
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.ariaCheckbox
      )}
      defaultSelected={args.defaultSelected}
      isDisabled={args.disabled}
      isIndeterminate={$ccVariants["indeterminate"] ? true : undefined}
      isReadOnly={$ccVariants["readonly"] ? true : undefined}
      isSelected={generateStateValueProp($state, [
        "ariaCheckbox",
        "isSelected"
      ])}
      onChange={async (...eventArgs) => {
        generateStateOnChangeProp($state, ["ariaCheckbox", "isSelected"]).apply(
          null,
          eventArgs
        );
      }}
      plasmicUpdateVariant={updateVariant}
      value={args.value}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        <CheckIcon
          className={classNames(projectcss.all, sty.svg__jpw8I)}
          role={"img"}
        />

        <MinusIcon
          className={classNames(projectcss.all, sty.svg__iqP73)}
          role={"img"}
        />
      </div>
      {renderPlasmicSlot({
        defaultContents: "Option",
        value: args.label
      })}
    </BaseCheckbox>
  );
}

const PlasmicDescendants = {
  ariaCheckbox: ["ariaCheckbox", "freeBox"],
  freeBox: ["freeBox"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicCheckbox__ArgProps,
          internalVariantPropNames: PlasmicCheckbox__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicCheckbox__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "ariaCheckbox") {
    func.displayName = "PlasmicCheckbox";
  } else {
    func.displayName = `PlasmicCheckbox.${nodeName}`;
  }
  return func;
}

export const PlasmicCheckbox = Object.assign(
  // Top-level PlasmicCheckbox renders the root element
  makeNodeComponent("ariaCheckbox"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    // Metadata about props expected for PlasmicCheckbox
    internalVariantProps: PlasmicCheckbox__VariantProps,
    internalArgProps: PlasmicCheckbox__ArgProps
  }
);

export default PlasmicCheckbox;
/* prettier-ignore-end */
