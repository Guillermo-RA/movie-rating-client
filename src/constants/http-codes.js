const errors = [
    {
        error: 400,
        message: "The request could not be understood or was missing required parameters."
    },
    {
        error: 401,
        message: "The request requires authentication, but the client failed to provide it."
    },
    {
        error: 403,
        message: "The server understood the request, but is refusing to fulfill it."
    },
    {
        error: 404,
        message: "The requested resource could not be found but may be available in the future."
    },
    {
        error: 405,
        message: "The method specified in the request is not allowed for the resource identified by the request URI."
    },
    {
        error: 406,
        message: "The server cannot produce a response matching the list of acceptable values defined in the request's proactive content negotiation headers."
    },
    {
        error: 407,
        message: "The client must first authenticate itself with the proxy."
    },
    {
        error: 408,
        message: "The server timed out waiting for the request."
    },
    {
        error: 409,
        message: "Indicates that the request could not be completed due to a conflict with the current state of the resource."
    },
    {
        error: 500,
        message: "A generic error message, given when an unexpected condition was encountered and no more specific message is suitable."
    },
    {
        error: 501,
        message: "The server does not support the functionality required to fulfill the request."
    },
    {
        error: 502,
        message: "The server acting as a gateway or proxy received an invalid response from the upstream server."
    },
    {
        error: 503,
        message: "The server is currently unavailable (because it is overloaded or down for maintenance). Generally, this is a temporary state."
    },
    {
        error: 504,
        message: "The server acting as a gateway or proxy timed out waiting for a response from the upstream server."
    },
    {
        error: 505,
        message: "The server does not support, or refuses to support, the HTTP protocol version that was used in the request message."
    }
];
