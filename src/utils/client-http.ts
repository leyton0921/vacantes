const defaultBaseUrl: string = "https://";

export class HttpClient {
    private baseUrl: string;

    constructor(baseUrl?: string) {
        this.baseUrl = baseUrl || defaultBaseUrl;
    };

    private async getHeaders() {
        return {
            "content-Type": "aplication/json"
        }
    };

    private async handleResponse(response: Response) {
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "ocurrio un error en la petición.");
        }
        return await response.json()
    };

    async get<T>(url: string): Promise<T> {
        const headers = await this.getHeaders()
        const response = await fetch(`${this.baseUrl}/${url}`, {
            headers: headers,
            method: "GET",
            cache: "no-store"
        });
        return this.handleResponse(response)
    };

    async delete<T>(url: string): Promise<T> {
        const headers = await this.getHeaders()
        const response = await fetch(`${this.baseUrl}/${url}`, {
            headers: headers,
            method: "DELETE"
        });

        return this.handleResponse(response)
    };

    async post<T, R>(url: string, body: R): Promise<T> {
        const headers = await this.getHeaders()
        const response = await fetch(`${this.baseUrl}/${url}`, {
            headers: headers,
            method: "POST",
            body: JSON.stringify(body)
        });

        return this.handleResponse(response)
    };
}