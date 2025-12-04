# @novak/sdk — Official NOVAK Protocol SDK (v0.1.0)

The **NOVAK Protocol** is the world’s first deterministic cryptographic
execution-integrity model — enforcing *Proof-Before-Action (PbA)* and producing
verifiable **Hash-Verified Execution Traces (HVET)** and **Execution Identity
Receipts (EIR)**.

This SDK provides reference implementations of NOVAK primitives:

- HVET (full SHA-X suite)
- EIR block generator
- Proof-Before-Action (PbA)
- HARMONEE Safety Gate
- REVELATION / RGAC audit chain
- Canonical timestamping
- Deterministic randomization utilities

The SDK is fully modular, tree-shakeable, and ESM-only.

---

## Installation


---

## Example Usage

### Compute a full HVET suite

```ts
import { computeHVET } from "@novak/sdk/hvet";

const result = await computeHVET(file);
console.log(result.sha256);
console.log(result.sha3_512);

npm install @novak/sdk

---

## Example Usage

### Compute a full HVET suite

```ts
import { computeHVET } from "@novak/sdk/hvet";

const result = await computeHVET(file);
console.log(result.sha256);
console.log(result.sha3_512);

Generate an Execution Identity Receipt

import { buildEIR } from "@novak/sdk/eir";

const eir = buildEIR(meta, hashes, timestamp);
console.log(eir);

Proof-Before-Action

import { proofBeforeAction } from "@novak/sdk/pba";

const output = await proofBeforeAction(rule, data, action);
