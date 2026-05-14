# Security Specification

## Data Invariants
- Products must have a valid schema and are read-only (for now) from the client.
- Products can only be listed if they are marked as public.
- The `isPublic` field must be explicitly evaluated during list queries.

## Dirty Dozen Payloads
1. Create product without authentication
2. Unauthenticated user updating product
3. Modifying `isPublic` from the client
...

## Test Runner
Available in `firestore.rules.test.ts`.
