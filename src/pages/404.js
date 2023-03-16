import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'gatsby';
const pageStyles = {
    color: `#232129`,
    padding: `96px`,
    fontFamily: `-apple-system, Roboto, sans-serif, serif`,
};
const headingStyles = {
    marginTop: 0,
    marginBottom: 64,
    maxWidth: 320,
};
const paragraphStyles = {
    marginBottom: 48,
};
const codeStyles = {
    color: `#8A6534`,
    padding: 4,
    backgroundColor: `#FFF4DB`,
    fontSize: `1.25rem`,
    borderRadius: 4,
};
const NotFoundPage = () => {
    return (_jsxs("main", { style: pageStyles, children: [_jsx("h1", { style: headingStyles, children: "Page not found" }), _jsxs("p", { style: paragraphStyles, children: ["Sorry \uD83D\uDE14, we couldn\u2019t find what you were looking for.", _jsx("br", {}), process.env.NODE_ENV === `development` ? (_jsxs(_Fragment, { children: [_jsx("br", {}), "Try creating a page in ", _jsx("code", { style: codeStyles, children: "src/pages/" }), ".", _jsx("br", {})] })) : null, _jsx("br", {}), _jsx(Link, { to: "/", children: "Go home" }), "."] })] }));
};
export default NotFoundPage;
export const Head = () => _jsx("title", { children: "Not found" });
