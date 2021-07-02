Info on getting started at [https://create-react-app.dev/docs/getting-started/](https://create-react-app.dev/docs/getting-started/)

```
>>  npx create-react-app react-app --use-npm
or if typescript based
>>  npx create-react-app react-app --use-npm --template typescript
```

If you need to have an interactive and continuous watch on the files, then set below environment variable and run tests.

```
CI=test  (set CI=test or export CI=test)
```

To know test coverage

```
>> npm run test -- --coverage
```

During git workflow we build optimized runtime package (current folder is development folder and has all libraries in node_modules)

```
>> npm run-script build
```

To deploy this (static websites) to free server, will use surge [https://surge.sh/help/getting-started-with-surge](https://surge.sh/help/getting-started-with-surge)

my domain name is [https://thanujtk.surge.sh/](https://thanujtk.surge.sh/)

```
>> surge (after install surge globally)
>> npx surge list (when installed globally to list domains owned by you)
```

Next is to use code formatting tool like [https://prettier.io/](https://prettier.io/), copy formatting rules from [https://prettier.io/playground/](https://prettier.io/playground/)

Create **.prettierrc** file at project root and copy the json rules to be used by prettier and also create **.prettierignore** to include ignore file.

Make sure package.json has devDependencies for above libraries and those modules are added to package-lock.json by call npm install or npx install

```
>> npm install --global prettier
if installed locally you need run as below, this is check only
>> npx prettier --check "**/*.js"   (This will return non-zero error code that can be used in workflow)
>> npx prettier --check  "**/*.{js,css,yml,yaml,json,md}"
To format
>> npx prettier --write "**/*.js"
>> npx prettier --write  "**/*.{js,css,yml,yaml,json,md}"
```

Add above command to package.json scripts section **"format:check": "prettier --check "\*\*/\*.{js,css,yml}"** and will be able to run as below

```
>> npm run format:check
```

## **Setting up repository and workflow**

CODEOWNERS file inside .github - [https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-code-owners](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-code-owners)

Next go to Project (react-app) Settings -> Branches

1. Add Rule under branch protection rule
2. Type master in pattern
3. Set checkbox - Require pull request, stale merge dismiss, code owners
4. Set checkbox - Require status check, branch upto date
5. Set checkbox - Include administrators to follow rules
6. Repeat above for develop branch

After above we will not be able to push and we need to create PR, for this we need to have a branch (like feature/ bugfix/ etc)
Let us create a branch with name "config/workflow"

```
 >> git checkout -b config/workflow
 >> git push --set-upstream origin config/workflow
```

In github you can't approve your own PR, so create another github account (thanujtk - thanuj.kumar@gmail.com) and add him as reviewer (CODEOWNERS)
Check Actions once pushed to know that PR is built with ci.yml workflow, after this go to settings -> branches and select build for master (means build should be successful to merge to master),
similarly for develop.

Next to approve PR we need collaborator (thanujtk), project settings -> Manage access -> Invite a collaborator, copy URL https://github.com/thanujkumar/react-app/invitations and accept invite
Next review changes and approve it so that merge is enabled.

Next when merged to develop we need to run next workflow, we can create a separate yml or add to same ci.yml with conditions.

Surge needs login id and token

```
>> surge whoami or npx surge whoami (to get login id on your local machine)
>> surge token or npx surge token (to get token for your id)
```

Add above as secrets

Next is adding cache to avoid repeated download of node_modules

Next is to have test coverage artifacts and build artifact for download

Next is [https://semver.org/](https://semver.org/) for release **Major.Minor.Patch**

Next is []() for conventional commits

```
ex:
  fix(store): change store api service input and output values
  BREAKING CHANGE: input and output needs to adopted
  closes issue #12

  OR ! as breaking change

  fix(store)!: change store api service input and output values
```

Next is installing semantic-release npm package

```
npm install --save-dev semantic-release
```

Next add **release.config.js** to contain semantic release info

After this we make a pull-request with feat: ... to develop, and from UI merge develop to master to check semantic release happen for feat:

Next is adding ./build and ./coverage assets as zip and making it available as part of the release when merged to master

So total process is branch -> PR to Develop -> Merge to Develop -> PR to Master -> Merge to Master

[https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)

Using commitlint [https://github.com/conventional-changelog/commitlint](https://github.com/conventional-changelog/commitlint)
