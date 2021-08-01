//https://semantic-release.gitbook.io/semantic-release/usage/configuration
//https://github.com/semantic-release/semantic-release/blob/master/docs/usage/configuration.md#configuration
module.exports = {
  branches: "master",
  repositoryUrl: "https://github.com/thanujtk/react-app",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/github",
      {
        assets: [
          { path: "build-artifact.zip", label: "Build" },
          { path: "test-coverage.zip", label: "Coverage" },
        ],
      },
    ],
  ],
};
