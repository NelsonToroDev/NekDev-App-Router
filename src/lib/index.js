export { Router } from "./components/Router";
export { Route } from "./components/Route";
export { Link } from "./components/Link";
// Isomorphic to be use on server side rendering and client side rendering
export function useQueryParams() {
    var req = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}).req;
    var isServer = typeof window === "undefined";
    if (isServer) {
        var query = req.query;
        return query;
    }
    var search = window.location.search;
    var params = new URLSearchParams(search);
    return Object.fromEntries(params.entries());
}
