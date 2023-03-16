import { jsx as _jsx } from "react/jsx-runtime";
import AEFLogoLight from '../../svg/aef-lightmode-logo.svg';
import AEFTextLogoLight from '../../svg/aef-text-lightmode-logo.svg';
import { StyledLogoTextOnly, StyledLogoMedium, StyledLogoLarge, } from './LogoStyles';
function Logo({ mode = `light`, size = `medium` }) {
    if (mode === `light`) {
        switch (size) {
            case `large`:
                return (_jsx(StyledLogoLarge, { src: AEFLogoLight, alt: "Animation Educators Forum logo" }));
            case `textOnly`:
                return (_jsx(StyledLogoTextOnly, { src: AEFTextLogoLight, alt: "Asifa Hollywood\\s Animation Educators Forum Wordmark" }));
            case `medium`:
            default:
                return (_jsx(StyledLogoMedium, { src: AEFLogoLight, alt: "Animation Educators Forum logo" }));
        }
    }
    else {
        // Eventually this should be switched to the dark mode logo
        switch (size) {
            case `large`:
                return (_jsx(StyledLogoLarge, { src: AEFLogoLight, alt: "Animation Educators Forum logo" }));
            case `textOnly`:
                return (_jsx(StyledLogoTextOnly, { src: AEFTextLogoLight, alt: "Asifa Hollywood\\s Animation Educators Forum Wordmark" }));
            case `medium`:
            default:
                return (_jsx(StyledLogoMedium, { src: AEFLogoLight, alt: "Animation Educators Forum logo" }));
        }
    }
}
export default Logo;
