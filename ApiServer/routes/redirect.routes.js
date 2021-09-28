import { Router } from "express";

const router = Router();

// 308 Permanent Redirect (method + body not modified)

// From MDN: The HyperText Transfer Protocol (HTTP) 308 Permanent Redirect redirect 
// status response code indicates that the resource requested has been definitively
// moved to the URL given by the Location headers.A browser redirects to this page
// and search engines update their links to the resource(in 'SEO-speak', it is said
// that the 'link-juice' is sent to the new URL).

router.all("/emplyoees*", (req, res) => {
    res.redirect(308, `/api/v1${req.url}`);
});

export const redirectRouter = {
    baseUrl: "/",
    router
};