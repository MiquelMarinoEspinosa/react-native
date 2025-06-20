### Docker environment

Requires docker installed

- Initialize docker container

```
make up
```

or once the docker image has been created

```
make run
```

Access to docker container

```
make shell
```

Create project skeleton

```
npx create-expo-app@latest --template blank <folder name>
```

Run the project

```
cd <folder name>
expo start
```

Set up

- Create `app` folder
- Add `index.jsx` file
- Create react native component inside the `index.js` file
- Install `expo-router`
  - `npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar`
  - add `scheme` property at `app.json`
  - update `main` property at `package.json` with `expo-router/entry` value
