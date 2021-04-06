export enum FetchStatus {
    IDLE,
    FETCHING,
    SUCCESS,
    ERROR
}

export interface Fetch {
    readonly status: FetchStatus
    readonly fetchedAt?: number
    readonly data?: unknown
}
