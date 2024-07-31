import { useState } from "react";

export default function useApi() {
    const [response, setResponse] = useState<Response | null>()
    const [isLoading, setIsLoading] = useState(false)

    const sendRequest = async (
        input: string | URL | Request,
        init?: RequestInit | undefined
    ) => {
        setIsLoading(true)
        const apiRes = await fetch(input, init)
        setIsLoading(false)
        setResponse(apiRes)
    }

    return {
        response,
        isLoading,
        sendRequest
    }
}