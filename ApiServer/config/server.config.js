import Express from "express";
import cors from "cors";
import morgan from "morgan";
// import paginate from "express-paginate";

import {
    ConfigService
} from "../services";

export default class ServerConfig {
    constructor({
        port,
        middlewares,
        routers
    }) {
        this.app = Express();
        this.app.set("env", ConfigService.NODE_ENV);
        this.app.set("port", port);
        this.registerCORSMiddleware()
            .registerMorganMiddleware()
            .registerJSONMiddleware();
        // .registerExpressPaginateMiddleware();

        middlewares &&
            middlewares.forEach(mdlw => {
                this.registerMiddleware(mdlw);
            });

        routers &&
            routers.forEach(({
                baseUrl,
                router
            }) => {
                this.registerRouter(baseUrl, router);
            });

        this.registerMiddleware(
            // catch 404 and forward to error handler
            function (req, res, next) {
                var err = new Error("Not Found");
                err.statusCode = 404;
                next(err);
            }
        );

        this.registerErrorHandlingMiddleware();
    }

    get port() {
        return this.app.get("port");
    }

    set port(number) {
        this.app.set("port", number);
    }

    registerMiddleware(middleware) {
        this.app.use(middleware);
        return this;
    }

    registerRouter(baseUrl, router) {
        this.app.use(baseUrl, router);
        return this;
    }

    registerJSONMiddleware() {
        this.registerMiddleware(Express.json());
        return this;
    }

    registerCORSMiddleware() {
        this.registerMiddleware(cors());
        return this;
    }

    registerMorganMiddleware() {
        this.registerMiddleware(morgan("combined"));
        return this;
    }

    // registerExpressPaginateMiddleware() {
    //     this.registerMiddleware(paginate.middleware(2, 100));
    //     return this;
    // }

    registerErrorHandlingMiddleware() {
        this.app.get("env") === "development" ?
            this.registerMiddleware(
                ({
                    statusCode = 500,
                    message,
                    stack
                }, req, res, next) => {
                    res.status(statusCode);
                    res.json({
                        statusCode,
                        message,
                        stack
                    });
                }
            ) :
            this.registerMiddleware(
                ({
                    statusCode = 500,
                    message
                }, req, res, next) => {
                    res.status(statusCode);
                    res.json({
                        statusCode,
                        message
                    });
                }
            );
        return this;
    }

    async listen() {
        try {
            this.app.listen(this.port, () => {
                console.log(`Listening on port: ${this.port}`);
            });

        } catch (error) {
            console.error(`App error: ${error.message}`);
        }
    }
}