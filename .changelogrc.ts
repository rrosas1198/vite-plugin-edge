import { ChangelogConfig } from "changelogen";

export default <Partial<ChangelogConfig>>{
    types: {
        feat: { title: "Enhancements", semver: "minor" },
        perf: { title: "Performance", semver: "patch" },
        fix: { title: "Fixes", semver: "patch" },
        refactor: { title: "Refactors" },
        examples: { title: "Examples" },
        docs: { title: "Documentation" },
        chore: { title: "Chore" },
        build: { title: "Build", semver: "patch" },
        test: { title: "Tests" },
        types: { title: "Types", semver: "patch" },
        style: { title: "Styles" },
        ci: { title: "CI" }
    }
};
