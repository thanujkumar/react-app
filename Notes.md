
Info on getting started at [https://create-react-app.dev/docs/getting-started/](https://create-react-app.dev/docs/getting-started/)
```
>>  npx create-react-app react-app --use-npm
or if typescript based
>>  npx create-react-app react-app --use-npm --template typescript
```
If you need to have an interactive and continuous watch on the files,  then set below environment variable and run tests.
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
