export interface ISharedResource {
  id: string
  ownerId: string
  wordId: undefined | string
  expireInSecs: number | null
}
