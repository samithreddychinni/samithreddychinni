# Samith Reddy

**Backend engineering, from the API to the filesystem.**

I build backend systems and developer tools in **Go and Rust**.
My work follows data through the less visible parts of software: persistence, retries, recovery, and expiry.

At **Inquinion Labs**, I work on backend services and AI workflows.
I study computer science at **Amrita Vishwa Vidyapeetham**, graduating in 2028.

[Résumé](https://samithreddy.me/resume) · [Portfolio](https://samithreddy.me) · [LinkedIn](https://linkedin.com/in/samith-reddy) · [Email](mailto:samithreddy067@gmail.com)

## Selected work

### [Fade](https://github.com/samithreddychinni/fade) — Files with a deadline

A Linux filesystem in Rust that gives files a time-to-live. Applications use ordinary file operations. Fade enforces expiry at the mount boundary.

Inside a developer-mode mount, the directory specifies the lifetime:

```sh
cp report.json ./mnt/24h/
cp cache.tar   ./mnt/7d/
```

The design separates expiry from deletion. Expired paths stop resolving through the mount, while physical cleanup waits for a configurable recovery window.
SQLite tracks the lifecycle. Startup reconciliation handles interrupted operations, and FUSE integration tests cover expiry, recovery, and remount behavior.

**Rust · FUSE · SQLite** · Developer preview
[Implementation](https://github.com/samithreddychinni/fade/blob/main/src/fuse_fs.rs) · [Lifecycle tests](https://github.com/samithreddychinni/fade/blob/main/tests/fuse_lifecycle.sh) · [Design and limits](https://github.com/samithreddychinni/fade#known-filesystem-limits)

### [RaftKV](https://github.com/samithreddychinni/raft-kv) — Durability across a cluster

A distributed key-value store I built in Go to study consensus and persistence.
It implements leader election, log replication, a checksummed write-ahead log, and snapshots. Reads confirm a quorum before returning data.

The implementation persists votes before replying, detects corrupt log records, and appends an entry in each new leader’s term.
The repository includes focused tests and documented limits: fixed membership, no authentication or TLS, and a scope intended for learning.

**Go · Raft · Write-ahead logging** · Systems study
[Architecture](https://github.com/samithreddychinni/raft-kv/blob/main/docs/architecture.md) · [Persistence tests](https://github.com/samithreddychinni/raft-kv/blob/main/internal/raft/persist_test.go) · [Read guarantees](https://github.com/samithreddychinni/raft-kv/blob/main/internal/raft/linearizable_test.go)

### [Paystable](https://github.com/IDEA-Amrita/paystable) — Between payment and fulfillment

An open-source Go service I work on to verify payment evidence before an order moves to fulfillment.
It persists webhooks, checks gateway status, and delivers signed callbacks through a PostgreSQL outbox.

A timeout leaves an awkward question: did the merchant process the callback, or never receive it?
The delivery contract makes retries explicit and requires merchant-side deduplication.
The Scout laboratory explores failure schedules, replays findings, and reduces them to smaller reproducible cases.

**Go · PostgreSQL · Payment verification** · Open source
[My contributions](https://github.com/IDEA-Amrita/paystable/commits?author=samithreddychinni) · [Delivery contract](https://github.com/IDEA-Amrita/paystable/blob/feature/resilience-lab/docs/callback-contract.md) · [Failure tests](https://github.com/IDEA-Amrita/paystable/blob/feature/resilience-lab/internal/delivery/worker_test.go)

## Engineering notes

- **[The queue you already have](https://samithreddy.me/blog/the-queue-you-already-have)**
  PostgreSQL job claims, retries, and the limits of recovery after a worker fails.
- **[Why 0.1 + 0.2 is not 0.3](https://samithreddy.me/blog/why-0-1-plus-0-2-is-not-0-3)**
  Binary representation, rounding, and choosing numeric types with care.

## Other explorations

[**Chess PGN analysis**](https://github.com/samithreddychinni/CHESS-PGN-ANALYSIS-ENGINE) — C++, bitboards, game trees, and alpha-beta pruning.
[**The Art of ASCII**](https://github.com/samithreddychinni/The-Art-of-ASCII) — an image-to-character converter in C.

---

**For backend and systems engineering opportunities:** [get in touch](mailto:samithreddy067@gmail.com) or [read my résumé](https://samithreddy.me/resume).
