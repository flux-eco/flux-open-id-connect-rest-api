/** @typedef {import("../../../../../flux-http-api/src/Adapter/Server/HttpServerRequest.mjs").HttpServerRequest} HttpServerRequest */
/** @typedef {import("../../../../../flux-http-api/src/Adapter/Server/HttpServerResponse.mjs").HttpServerResponse} HttpServerResponse */
/** @typedef {import("../../Request/Port/RequestService.mjs").RequestService} RequestService */

export class HandleRequestCommand {
    /**
     * @type {RequestService}
     */
    #request_service;

    /**
     * @param {RequestService} request_service
     * @returns {HandleRequestCommand}
     */
    static new(request_service) {
        return new this(
            request_service
        );
    }

    /**
     * @param {RequestService} request_service
     * @private
     */
    constructor(request_service) {
        this.#request_service = request_service;
    }

    /**
     * @param {HttpServerRequest} request
     * @returns {HttpServerResponse | null}
     */
    async handleRequest(request) {
        if (request.url.pathname.startsWith("/api/") || request.url.pathname === "/api") {
            return this.#request_service.handleApiRequest(
                request
            );
        }

        return null;
    }
}