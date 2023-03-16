import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { StyledHeroHeading, StyledHeroHeadingContent, StyledHeroHeadingContentHome, } from './HeroHeadingStyles';
// import wing from '../images/wing.png';
export default function HeroHeading({ children, home = false }) {
    return (_jsxs(StyledHeroHeading, { children: [home ? (_jsx(_Fragment, { children: "add images" })) : null, _jsx("div", { className: "grad grad-right" }), _jsx("div", { className: "grad grad-left" }), _jsx("div", { className: "grad grad-top" }), home ? (_jsx(StyledHeroHeadingContentHome, { children: children })) : (_jsx(StyledHeroHeadingContent, { children: children })), _jsx("div", { className: "grad grad-bottom" })] }));
}
