/**
 * Multiauth APIs
 *
 * ```sh
 * npm install @self.id/multiauth
 * ```
 *
 * @module multiauth
 */

export type { ModalConfig } from './components/Modal'
export { Provider } from './components/Provider'
export type {
  ProviderConfig as MultiAuthProviderConfig,
  ProviderProps,
} from './components/Provider'
export * from './connectors'
export * from './hooks'
export * from './networks'
export * from './providers/types'
export * from './types'
