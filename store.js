import { action, observable, computed, runInAction, makeObservable } from 'mobx'
import { enableStaticRendering } from 'mobx-react-lite'

enableStaticRendering(typeof window === 'undefined')

export class Store {
  country = '';

  constructor() {
    makeObservable(this, {
      country: observable,
      hydrate: action,
    })
  }

  hydrate = (data) => {
    if (!data) return
    this.country = data.country
  }
}
