    import axios from 'axios';

    type ErrorWithMessage = {
    message: string;
    };

    function isErrorWithMessage(error: unknown): error is ErrorWithMessage {
    return (
        typeof error === 'object' &&
        error !== null &&
        'message' in error &&
        typeof (error as Record<string, unknown>).message === 'string'
    );
    }

    function toErrorWithMessage(maybeError: unknown): ErrorWithMessage {
    if (isErrorWithMessage(maybeError)) {
        return maybeError;
    }

    try {
        return new Error(JSON.stringify(maybeError));
    } catch {
        // fallback in case there's an error stringifying the maybeError
        // like with circular references for example.
        return new Error(String(maybeError));
    }
    }

    /**
     * Get the error message from an error (type unknown)
     *
     * Reference: https://kentcdodds.com/blog/get-a-catch-block-error-message-with-typescript
     */
    function getErrorMessage(error: unknown) {
    const axiosErrorMessage = tryGetAxiosErrorMessage(error);
    if (axiosErrorMessage) {
        return axiosErrorMessage;
    }
    return toErrorWithMessage(error).message;
    }

    function tryGetAxiosErrorMessage(error: unknown): string | null {
    try {
        if (axios.isAxiosError(error)) {
        const response = error.response;

        if (response && response.data && response.data.message) {
            return response.data.message;
        }

        if (response && response.data && Array.isArray(response.data.errors)) {
            return response.data.errors
            .map(
                (errorObj: {message?: string}) =>
                errorObj.message || 'unknown error',
            )
            .join(', ');
        }
        }
        return null;
    } catch (err) {
        return null;
    }
    }

    export const errorUtils = {getErrorMessage};