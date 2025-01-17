# Module: core

Core APIs

```sh
npm install @self.id/core
```

## Classes

- [Core](../classes/core.Core.md)
- [PublicID](../classes/core.PublicID.md)

## Type aliases

### CeramicNetwork

Ƭ **CeramicNetwork**: ``"local"`` \| ``"mainnet-gateway"`` \| ``"testnet-clay"`` \| ``"testnet-clay-gateway"``

___

### CoreModelTypes

Ƭ **CoreModelTypes**: `ModelTypeAliases`<{ `AlsoKnownAs`: `AlsoKnownAs` ; `BasicProfile`: `BasicProfile` ; `CryptoAccounts`: `CryptoAccountLinks`  }, { `alsoKnownAs`: ``"AlsoKnownAs"`` ; `basicProfile`: ``"BasicProfile"`` ; `cryptoAccounts`: ``"CryptoAccounts"``  }\>

___

### CoreParams

Ƭ **CoreParams**<`ModelTypes`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ModelTypes` | extends `ModelTypeAliases` = [`CoreModelTypes`](core.md#coremodeltypes) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cache?` | `TileCache` \| `boolean` |
| `ceramic` | [`CeramicNetwork`](core.md#ceramicnetwork) \| `string` |
| `loader?` | `TileLoader` |
| `model?` | `ModelTypesToAliases`<`ModelTypes`\> |

___

### PublicIDParams

Ƭ **PublicIDParams**<`ModelTypes`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ModelTypes` | extends `ModelTypeAliases` = [`CoreModelTypes`](core.md#coremodeltypes) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `core` | [`Core`](../classes/core.Core.md)<`ModelTypes`\> |
| `id` | `string` |

## Variables

### CERAMIC\_URLS

• **CERAMIC\_URLS**: `Record`<[`CeramicNetwork`](core.md#ceramicnetwork), `string`\>

## Functions

### isCAIP10string

▸ **isCAIP10string**(`account`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `string` |

#### Returns

`boolean`
