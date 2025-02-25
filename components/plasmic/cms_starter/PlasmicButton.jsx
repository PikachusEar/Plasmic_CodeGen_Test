// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: eNceDkVszvmjFS7wKy9BUq
// Component: lv_ZEXT3JZzV
import * as React from "react";
import { useRouter } from "next/router";
import {
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  hasVariant,
  renderPlasmicSlot,
  useDollarState
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import { BaseButton } from "@plasmicpkgs/react-aria/skinny/registerButton";
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: eNceDkVszvmjFS7wKy9BUq/projectcss
import sty from "./PlasmicButton.module.css"; // plasmic-import: lv_ZEXT3JZzV/css
import CircleIcon from "./icons/PlasmicIcon__Circle"; // plasmic-import: Nd98W7jxpbzJ/icon
import ChevronDownIcon from "./icons/PlasmicIcon__ChevronDown"; // plasmic-import: xbIZeSmoDbb_/icon

createPlasmicElementProxy;

export const PlasmicButton__VariantProps = new Array(
  "color",
  "type",
  "size",
  "iconStart",
  "iconEnd",
  "roundedFull",
  "flatSide"
);

export const PlasmicButton__ArgProps = new Array(
  "disabled",
  "submitsForm",
  "resetsForm",
  "ariaLabel",
  "onClick",
  "linkTo",
  "openLinkInNewTab",
  "start",
  "label",
  "end"
);

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicButton__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(
    () =>
      Object.assign(
        {
          linkTo: "",
          openLinkInNewTab: false
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
        path: "color",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.color
      },
      {
        path: "size",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.size
      },
      {
        path: "iconStart",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.iconStart
      },
      {
        path: "iconEnd",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.iconEnd
      },
      {
        path: "roundedFull",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.roundedFull
      },
      {
        path: "type",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.type
      },
      {
        path: "flatSide",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.flatSide
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
    disabled: false
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
    <BaseButton
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      aria-label={args.ariaLabel}
      className={classNames(
        "__wab_instance",
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.root,
        {
          [sty.rootcolor_errorDestructive]: hasVariant(
            $state,
            "color",
            "errorDestructive"
          ),
          [sty.rootcolor_muted]: hasVariant($state, "color", "muted"),
          [sty.rootcolor_neutral]: hasVariant($state, "color", "neutral"),
          [sty.rootcolor_neutral_type_soft]:
            hasVariant($state, "color", "neutral") &&
            hasVariant($state, "type", "soft"),
          [sty.rootcolor_success]: hasVariant($state, "color", "success"),
          [sty.rootcolor_warning]: hasVariant($state, "color", "warning"),
          [sty.rootflatSide_bottom]: hasVariant($state, "flatSide", "bottom"),
          [sty.rootflatSide_left]: hasVariant($state, "flatSide", "left"),
          [sty.rootflatSide_right]: hasVariant($state, "flatSide", "right"),
          [sty.rootflatSide_top]: hasVariant($state, "flatSide", "top"),
          [sty.rooticonEnd]: hasVariant($state, "iconEnd", "iconEnd"),
          [sty.rooticonStart]: hasVariant($state, "iconStart", "iconStart"),
          [sty.rootroundedFull]: hasVariant(
            $state,
            "roundedFull",
            "roundedFull"
          ),
          [sty.rootsize_extraLarge]: hasVariant($state, "size", "extraLarge"),
          [sty.rootsize_extraSmall]: hasVariant($state, "size", "extraSmall"),
          [sty.rootsize_large]: hasVariant($state, "size", "large"),
          [sty.rootsize_small]: hasVariant($state, "size", "small"),
          [sty.roottype_bordered]: hasVariant($state, "type", "bordered"),
          [sty.roottype_bordered_color_errorDestructive]:
            hasVariant($state, "color", "errorDestructive") &&
            hasVariant($state, "type", "bordered"),
          [sty.roottype_bordered_color_muted]:
            hasVariant($state, "color", "muted") &&
            hasVariant($state, "type", "bordered"),
          [sty.roottype_bordered_color_neutral]:
            hasVariant($state, "color", "neutral") &&
            hasVariant($state, "type", "bordered"),
          [sty.roottype_bordered_color_success]:
            hasVariant($state, "color", "success") &&
            hasVariant($state, "type", "bordered"),
          [sty.roottype_bordered_color_warning]:
            hasVariant($state, "color", "warning") &&
            hasVariant($state, "type", "bordered"),
          [sty.roottype_soft]: hasVariant($state, "type", "soft"),
          [sty.roottype_soft_color_errorDestructive]:
            hasVariant($state, "color", "errorDestructive") &&
            hasVariant($state, "type", "soft"),
          [sty.roottype_soft_color_muted]:
            hasVariant($state, "color", "muted") &&
            hasVariant($state, "type", "soft"),
          [sty.roottype_soft_color_success]:
            hasVariant($state, "color", "success") &&
            hasVariant($state, "type", "soft"),
          [sty.roottype_soft_color_warning]:
            hasVariant($state, "color", "warning") &&
            hasVariant($state, "type", "soft")
        }
      )}
      href={args.linkTo}
      isDisabled={args.disabled}
      onPress={args.onClick}
      plasmicUpdateVariant={updateVariant}
      resetsForm={args.resetsForm}
      submitsForm={args.submitsForm}
      target={(() => {
        try {
          return $props.openLinkInNewTab ? "_blank" : "_self";
        } catch (e) {
          if (
            e instanceof TypeError ||
            e?.plasmicType === "PlasmicUndefinedDataError"
          ) {
            return undefined;
          }
          throw e;
        }
      })()}
    >
      {(
        hasVariant($state, "type", "bordered") && $ccVariants["pressed"]
          ? true
          : hasVariant($state, "type", "bordered") && $ccVariants["hovered"]
          ? true
          : hasVariant($state, "type", "soft")
          ? true
          : false
      ) ? (
        <div
          data-plasmic-name={"softBackground"}
          data-plasmic-override={overrides.softBackground}
          className={classNames(projectcss.all, sty.softBackground, {
            [sty.softBackgroundcolor_errorDestructive]: hasVariant(
              $state,
              "color",
              "errorDestructive"
            ),
            [sty.softBackgroundcolor_muted]: hasVariant(
              $state,
              "color",
              "muted"
            ),
            [sty.softBackgroundcolor_neutral]: hasVariant(
              $state,
              "color",
              "neutral"
            ),
            [sty.softBackgroundcolor_success]: hasVariant(
              $state,
              "color",
              "success"
            ),
            [sty.softBackgroundcolor_warning]: hasVariant(
              $state,
              "color",
              "warning"
            ),
            [sty.softBackgroundroundedFull]: hasVariant(
              $state,
              "roundedFull",
              "roundedFull"
            ),
            [sty.softBackgroundsize_large]: hasVariant($state, "size", "large"),
            [sty.softBackgroundtype_bordered]: hasVariant(
              $state,
              "type",
              "bordered"
            ),
            [sty.softBackgroundtype_soft]: hasVariant($state, "type", "soft")
          })}
        />
      ) : null}
      {(hasVariant($state, "type", "bordered") ? true : false) ? (
        <div
          data-plasmic-name={"border"}
          data-plasmic-override={overrides.border}
          className={classNames(projectcss.all, sty.border, {
            [sty.bordercolor_errorDestructive]: hasVariant(
              $state,
              "color",
              "errorDestructive"
            ),
            [sty.bordercolor_muted]: hasVariant($state, "color", "muted"),
            [sty.bordercolor_neutral]: hasVariant($state, "color", "neutral"),
            [sty.bordercolor_success]: hasVariant($state, "color", "success"),
            [sty.bordercolor_warning]: hasVariant($state, "color", "warning"),
            [sty.borderflatSide_bottom]: hasVariant(
              $state,
              "flatSide",
              "bottom"
            ),
            [sty.borderflatSide_left]: hasVariant($state, "flatSide", "left"),
            [sty.borderflatSide_right]: hasVariant($state, "flatSide", "right"),
            [sty.borderflatSide_top]: hasVariant($state, "flatSide", "top"),
            [sty.borderroundedFull]: hasVariant(
              $state,
              "roundedFull",
              "roundedFull"
            ),
            [sty.bordersize_large]: hasVariant($state, "size", "large"),
            [sty.bordertype_bordered]: hasVariant($state, "type", "bordered"),
            [sty.bordertype_bordered_color_muted]:
              hasVariant($state, "color", "muted") &&
              hasVariant($state, "type", "bordered"),
            [sty.bordertype_soft]: hasVariant($state, "type", "soft")
          })}
        />
      ) : null}
      <div
        data-plasmic-name={"interactionEffect"}
        data-plasmic-override={overrides.interactionEffect}
        className={classNames(projectcss.all, sty.interactionEffect, {
          [sty.interactionEffectcolor_errorDestructive]: hasVariant(
            $state,
            "color",
            "errorDestructive"
          ),
          [sty.interactionEffectcolor_muted]: hasVariant(
            $state,
            "color",
            "muted"
          ),
          [sty.interactionEffectcolor_neutral]: hasVariant(
            $state,
            "color",
            "neutral"
          ),
          [sty.interactionEffectcolor_success]: hasVariant(
            $state,
            "color",
            "success"
          ),
          [sty.interactionEffectcolor_warning]: hasVariant(
            $state,
            "color",
            "warning"
          ),
          [sty.interactionEffectroundedFull]: hasVariant(
            $state,
            "roundedFull",
            "roundedFull"
          ),
          [sty.interactionEffectsize_large]: hasVariant(
            $state,
            "size",
            "large"
          ),
          [sty.interactionEffectsize_small]: hasVariant(
            $state,
            "size",
            "small"
          ),
          [sty.interactionEffecttype_bordered]: hasVariant(
            $state,
            "type",
            "bordered"
          ),
          [sty.interactionEffecttype_bordered_color_success]:
            hasVariant($state, "color", "success") &&
            hasVariant($state, "type", "bordered"),
          [sty.interactionEffecttype_soft]: hasVariant($state, "type", "soft")
        })}
        style={
          hasVariant($state, "type", "bordered") && $ccVariants["pressed"]
            ? { display: "block" }
            : undefined
        }
      />

      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__gLiH, {
          [sty.freeBoxcolor_neutral__gLiH8McvA]: hasVariant(
            $state,
            "color",
            "neutral"
          ),
          [sty.freeBoxroundedFull__gLiHbHgAg]: hasVariant(
            $state,
            "roundedFull",
            "roundedFull"
          ),
          [sty.freeBoxsize_extraLarge__gLiHtVnvq]: hasVariant(
            $state,
            "size",
            "extraLarge"
          ),
          [sty.freeBoxsize_extraSmall__gLiHEGlj]: hasVariant(
            $state,
            "size",
            "extraSmall"
          ),
          [sty.freeBoxsize_large__gLiHgmCk]: hasVariant(
            $state,
            "size",
            "large"
          ),
          [sty.freeBoxsize_small__gLiHBil6L]: hasVariant(
            $state,
            "size",
            "small"
          ),
          [sty.freeBoxtype_bordered__gLiH4EqU5]: hasVariant(
            $state,
            "type",
            "bordered"
          ),
          [sty.freeBoxtype_bordered_color_success__gLiH4EqU5Exiu]:
            hasVariant($state, "color", "success") &&
            hasVariant($state, "type", "bordered")
        })}
      >
        <div
          className={classNames(projectcss.all, sty.freeBox__rVxte, {
            [sty.freeBoxcolor_neutral__rVxte8McvA]: hasVariant(
              $state,
              "color",
              "neutral"
            ),
            [sty.freeBoxcolor_neutral_type_soft__rVxte8McvAOmLy8]:
              hasVariant($state, "color", "neutral") &&
              hasVariant($state, "type", "soft"),
            [sty.freeBoxiconStart__rVxteMei9Q]: hasVariant(
              $state,
              "iconStart",
              "iconStart"
            ),
            [sty.freeBoxsize_extraLarge__rVxtetVnvq]: hasVariant(
              $state,
              "size",
              "extraLarge"
            ),
            [sty.freeBoxsize_large__rVxtegmCk]: hasVariant(
              $state,
              "size",
              "large"
            ),
            [sty.freeBoxsize_small__rVxteBil6L]: hasVariant(
              $state,
              "size",
              "small"
            ),
            [sty.freeBoxtype_bordered__rVxte4EqU5]: hasVariant(
              $state,
              "type",
              "bordered"
            )
          })}
        >
          {renderPlasmicSlot({
            defaultContents: (
              <CircleIcon
                className={classNames(projectcss.all, sty.svg__mVgKk)}
                role={"img"}
              />
            ),

            value: args.start,
            className: classNames(sty.slotTargetStart, {
              [sty.slotTargetStartcolor_errorDestructive]: hasVariant(
                $state,
                "color",
                "errorDestructive"
              ),
              [sty.slotTargetStartcolor_muted]: hasVariant(
                $state,
                "color",
                "muted"
              ),
              [sty.slotTargetStartcolor_neutral]: hasVariant(
                $state,
                "color",
                "neutral"
              ),
              [sty.slotTargetStartcolor_neutral_type_soft]:
                hasVariant($state, "color", "neutral") &&
                hasVariant($state, "type", "soft"),
              [sty.slotTargetStartcolor_success]: hasVariant(
                $state,
                "color",
                "success"
              ),
              [sty.slotTargetStartcolor_warning]: hasVariant(
                $state,
                "color",
                "warning"
              ),
              [sty.slotTargetStarticonStart]: hasVariant(
                $state,
                "iconStart",
                "iconStart"
              ),
              [sty.slotTargetStartsize_extraLarge]: hasVariant(
                $state,
                "size",
                "extraLarge"
              ),
              [sty.slotTargetStartsize_extraSmall]: hasVariant(
                $state,
                "size",
                "extraSmall"
              ),
              [sty.slotTargetStartsize_large]: hasVariant(
                $state,
                "size",
                "large"
              ),
              [sty.slotTargetStartsize_small]: hasVariant(
                $state,
                "size",
                "small"
              ),
              [sty.slotTargetStarttype_bordered]: hasVariant(
                $state,
                "type",
                "bordered"
              ),
              [sty.slotTargetStarttype_bordered_color_errorDestructive]:
                hasVariant($state, "color", "errorDestructive") &&
                hasVariant($state, "type", "bordered"),
              [sty.slotTargetStarttype_bordered_color_muted]:
                hasVariant($state, "color", "muted") &&
                hasVariant($state, "type", "bordered"),
              [sty.slotTargetStarttype_bordered_color_neutral]:
                hasVariant($state, "color", "neutral") &&
                hasVariant($state, "type", "bordered"),
              [sty.slotTargetStarttype_bordered_color_success]:
                hasVariant($state, "color", "success") &&
                hasVariant($state, "type", "bordered"),
              [sty.slotTargetStarttype_bordered_color_warning]:
                hasVariant($state, "color", "warning") &&
                hasVariant($state, "type", "bordered"),
              [sty.slotTargetStarttype_soft]: hasVariant(
                $state,
                "type",
                "soft"
              ),
              [sty.slotTargetStarttype_soft_color_errorDestructive]:
                hasVariant($state, "color", "errorDestructive") &&
                hasVariant($state, "type", "soft"),
              [sty.slotTargetStarttype_soft_color_muted]:
                hasVariant($state, "color", "muted") &&
                hasVariant($state, "type", "soft"),
              [sty.slotTargetStarttype_soft_color_success]:
                hasVariant($state, "color", "success") &&
                hasVariant($state, "type", "soft"),
              [sty.slotTargetStarttype_soft_color_warning]:
                hasVariant($state, "color", "warning") &&
                hasVariant($state, "type", "soft")
            })
          })}
        </div>
        {renderPlasmicSlot({
          defaultContents: (
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__nffgO
              )}
            >
              {"Text"}
            </div>
          ),

          value: args.label,
          className: classNames(sty.slotTargetLabel, {
            [sty.slotTargetLabelcolor_errorDestructive]: hasVariant(
              $state,
              "color",
              "errorDestructive"
            ),
            [sty.slotTargetLabelcolor_muted]: hasVariant(
              $state,
              "color",
              "muted"
            ),
            [sty.slotTargetLabelcolor_neutral]: hasVariant(
              $state,
              "color",
              "neutral"
            ),
            [sty.slotTargetLabelcolor_neutral_type_soft]:
              hasVariant($state, "color", "neutral") &&
              hasVariant($state, "type", "soft"),
            [sty.slotTargetLabelcolor_success]: hasVariant(
              $state,
              "color",
              "success"
            ),
            [sty.slotTargetLabelcolor_warning]: hasVariant(
              $state,
              "color",
              "warning"
            ),
            [sty.slotTargetLabeliconEnd]: hasVariant(
              $state,
              "iconEnd",
              "iconEnd"
            ),
            [sty.slotTargetLabeliconStart]: hasVariant(
              $state,
              "iconStart",
              "iconStart"
            ),
            [sty.slotTargetLabelsize_extraLarge]: hasVariant(
              $state,
              "size",
              "extraLarge"
            ),
            [sty.slotTargetLabelsize_extraSmall]: hasVariant(
              $state,
              "size",
              "extraSmall"
            ),
            [sty.slotTargetLabelsize_large]: hasVariant(
              $state,
              "size",
              "large"
            ),
            [sty.slotTargetLabelsize_small]: hasVariant(
              $state,
              "size",
              "small"
            ),
            [sty.slotTargetLabeltype_bordered]: hasVariant(
              $state,
              "type",
              "bordered"
            ),
            [sty.slotTargetLabeltype_bordered_color_errorDestructive]:
              hasVariant($state, "color", "errorDestructive") &&
              hasVariant($state, "type", "bordered"),
            [sty.slotTargetLabeltype_bordered_color_muted]:
              hasVariant($state, "color", "muted") &&
              hasVariant($state, "type", "bordered"),
            [sty.slotTargetLabeltype_bordered_color_neutral]:
              hasVariant($state, "color", "neutral") &&
              hasVariant($state, "type", "bordered"),
            [sty.slotTargetLabeltype_bordered_color_success]:
              hasVariant($state, "color", "success") &&
              hasVariant($state, "type", "bordered"),
            [sty.slotTargetLabeltype_bordered_color_warning]:
              hasVariant($state, "color", "warning") &&
              hasVariant($state, "type", "bordered"),
            [sty.slotTargetLabeltype_soft]: hasVariant($state, "type", "soft"),
            [sty.slotTargetLabeltype_soft_color_errorDestructive]:
              hasVariant($state, "color", "errorDestructive") &&
              hasVariant($state, "type", "soft"),
            [sty.slotTargetLabeltype_soft_color_muted]:
              hasVariant($state, "color", "muted") &&
              hasVariant($state, "type", "soft"),
            [sty.slotTargetLabeltype_soft_color_success]:
              hasVariant($state, "color", "success") &&
              hasVariant($state, "type", "soft"),
            [sty.slotTargetLabeltype_soft_color_warning]:
              hasVariant($state, "color", "warning") &&
              hasVariant($state, "type", "soft")
          })
        })}
        <div
          className={classNames(projectcss.all, sty.freeBox__u13Xy, {
            [sty.freeBoxiconEnd__u13XydN9O]: hasVariant(
              $state,
              "iconEnd",
              "iconEnd"
            ),
            [sty.freeBoxsize_extraLarge__u13XYtVnvq]: hasVariant(
              $state,
              "size",
              "extraLarge"
            ),
            [sty.freeBoxsize_large__u13XYgmCk]: hasVariant(
              $state,
              "size",
              "large"
            ),
            [sty.freeBoxsize_small__u13XyBil6L]: hasVariant(
              $state,
              "size",
              "small"
            )
          })}
        >
          {renderPlasmicSlot({
            defaultContents: (
              <ChevronDownIcon
                className={classNames(projectcss.all, sty.svg__v1BEk)}
                role={"img"}
              />
            ),

            value: args.end,
            className: classNames(sty.slotTargetEnd, {
              [sty.slotTargetEndcolor_errorDestructive]: hasVariant(
                $state,
                "color",
                "errorDestructive"
              ),
              [sty.slotTargetEndcolor_muted]: hasVariant(
                $state,
                "color",
                "muted"
              ),
              [sty.slotTargetEndcolor_neutral]: hasVariant(
                $state,
                "color",
                "neutral"
              ),
              [sty.slotTargetEndcolor_neutral_type_soft]:
                hasVariant($state, "color", "neutral") &&
                hasVariant($state, "type", "soft"),
              [sty.slotTargetEndcolor_success]: hasVariant(
                $state,
                "color",
                "success"
              ),
              [sty.slotTargetEndcolor_warning]: hasVariant(
                $state,
                "color",
                "warning"
              ),
              [sty.slotTargetEndiconEnd]: hasVariant(
                $state,
                "iconEnd",
                "iconEnd"
              ),
              [sty.slotTargetEndiconStart]: hasVariant(
                $state,
                "iconStart",
                "iconStart"
              ),
              [sty.slotTargetEndsize_extraLarge]: hasVariant(
                $state,
                "size",
                "extraLarge"
              ),
              [sty.slotTargetEndsize_extraSmall]: hasVariant(
                $state,
                "size",
                "extraSmall"
              ),
              [sty.slotTargetEndsize_large]: hasVariant(
                $state,
                "size",
                "large"
              ),
              [sty.slotTargetEndsize_small]: hasVariant(
                $state,
                "size",
                "small"
              ),
              [sty.slotTargetEndtype_bordered]: hasVariant(
                $state,
                "type",
                "bordered"
              ),
              [sty.slotTargetEndtype_bordered_color_errorDestructive]:
                hasVariant($state, "color", "errorDestructive") &&
                hasVariant($state, "type", "bordered"),
              [sty.slotTargetEndtype_bordered_color_muted]:
                hasVariant($state, "color", "muted") &&
                hasVariant($state, "type", "bordered"),
              [sty.slotTargetEndtype_bordered_color_neutral]:
                hasVariant($state, "color", "neutral") &&
                hasVariant($state, "type", "bordered"),
              [sty.slotTargetEndtype_bordered_color_success]:
                hasVariant($state, "color", "success") &&
                hasVariant($state, "type", "bordered"),
              [sty.slotTargetEndtype_bordered_color_warning]:
                hasVariant($state, "color", "warning") &&
                hasVariant($state, "type", "bordered"),
              [sty.slotTargetEndtype_soft]: hasVariant($state, "type", "soft"),
              [sty.slotTargetEndtype_soft_color_errorDestructive]:
                hasVariant($state, "color", "errorDestructive") &&
                hasVariant($state, "type", "soft"),
              [sty.slotTargetEndtype_soft_color_muted]:
                hasVariant($state, "color", "muted") &&
                hasVariant($state, "type", "soft"),
              [sty.slotTargetEndtype_soft_color_success]:
                hasVariant($state, "color", "success") &&
                hasVariant($state, "type", "soft"),
              [sty.slotTargetEndtype_soft_color_warning]:
                hasVariant($state, "color", "warning") &&
                hasVariant($state, "type", "soft")
            })
          })}
        </div>
      </Stack__>
    </BaseButton>
  );
}

const PlasmicDescendants = {
  root: ["root", "softBackground", "border", "interactionEffect"],
  softBackground: ["softBackground"],
  border: ["border"],
  interactionEffect: ["interactionEffect"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicButton__ArgProps,
          internalVariantPropNames: PlasmicButton__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicButton__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicButton";
  } else {
    func.displayName = `PlasmicButton.${nodeName}`;
  }
  return func;
}

export const PlasmicButton = Object.assign(
  // Top-level PlasmicButton renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    softBackground: makeNodeComponent("softBackground"),
    border: makeNodeComponent("border"),
    interactionEffect: makeNodeComponent("interactionEffect"),
    // Metadata about props expected for PlasmicButton
    internalVariantProps: PlasmicButton__VariantProps,
    internalArgProps: PlasmicButton__ArgProps
  }
);

export default PlasmicButton;
/* prettier-ignore-end */
