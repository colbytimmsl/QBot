export const environment = {
    production: false,
    apiBaseUrl: "https://softlandingqbot.azurewebsites.net/api/Request/",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "c9c42e34-534d-4aca-8e53-07bf99a6c77c",
        clientId: "d3b0c532-742f-4081-bd97-97a45bf35f45",
        redirectUri: "/app-silent-end",
        cacheLocation: "localStorage",
        navigateToLoginRequestUrl: false,
        extraQueryParameters: "",
        popUp: true,
        popUpUri: "/app-silent-start",
        popUpWidth: 600,
        popUpHeight: 535
    },

    // do not populate the following:
    upn: "",
    tid: "",
};
