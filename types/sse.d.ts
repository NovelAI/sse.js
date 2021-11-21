/**
 * Copyright (C) 2016 Maxime Petazzoni <maxime.petazzoni@bulix.org>.
 * All rights reserved.
 */
export class SSE {
    constructor(url: any, options: any);
    INITIALIZING: number;
    CONNECTING: number;
    OPEN: number;
    CLOSED: number;
    url: any;
    headers: any;
    payload: any;
    method: any;
    withCredentials: boolean;
    FIELD_SEPARATOR: string;
    listeners: {};
    xhr: XMLHttpRequest;
    readyState: number;
    progress: number;
    chunk: string;
    addEventListener(type: any, listener: any): void;
    removeEventListener(type: any, listener: any): void;
    dispatchEvent(e: any): any;
    _setReadyState(state: any): void;
    _onStreamFailure(e: any): void;
    _onStreamProgress(e: any): void;
    _onStreamLoaded(e: any): void;
    /**
     * Parse a received SSE event chunk into a constructed event object.
     */
    _parseEventChunk(chunk: any): CustomEvent<any>;
    _checkStreamClosed(): void;
    stream(): void;
    close(): void;
}
