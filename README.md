# Patient NZ - Medical Cannabis related Data & Statistics 

Usage:

```typescript
import { socialMedia, PollReportData } from "@patient-nz/medical-cannabis-data";

const {
    reddit: {
        polls
    }
} = socialMedia;

// Unique list of up to date poll data
const allPollData = Object.values(polls)
    .flatMap<PollReportData>(value => value)
    .filter((poll, index, array) => {
        const before = array.slice(0, index);
        const foundBefore = before.find(other => other.url === poll.url);
        return !foundBefore;
    });
```

# License 

This work is licensed under a
[Creative Commons Attribution 4.0 International License][cc-by].

[![CC BY 4.0][cc-by-image]][cc-by]

[cc-by]: http://creativecommons.org/licenses/by/4.0/
[cc-by-image]: https://i.creativecommons.org/l/by/4.0/88x31.png
[cc-by-shield]: https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg