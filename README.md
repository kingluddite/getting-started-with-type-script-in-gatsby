# AEF Brochure Site Package Scripts

This README provides an overview of the package scripts defined in the `package.json` file for the AEF Brochure Site project. Each script has a specific purpose and can be executed using `pnpm` as the package manager. The following sections describe each script and provide instructions on how to run them.

**Note:** Make sure you have `pnpm` installed globally on your system before executing the scripts.

## fix list

// @ts-ignore

- src/components/atoms/buttons/ScrollToTopButton/ScrollToTopButton.spec.tsx it `scrolls to top when clicked`
- src/components/atoms/Logo/Logo.spec.tsx
- src/components/atoms/nav-content/MobileNavContent/MobileNavContent.spec.tsx (get clicks to mock function and show that "close" and "open" text changes on aria)
- src/utils/sitemapMapper/sitemapMapper.spec.ts - fix fontawesome
  and other commented out ts errors
- src/components/molecules/blogs/LatestNewsList/LatestNewsList.spec.tsx
- src/components/molecules/cards/BoardMemberCard/BoardMemberCard.spec.tsx

## List of Scripts

- `preinstall`
- `start`
- `build`
- `serve`
- `clean`
- `type-check`
- `lint`
- `lint:fix`
- `format`
- `postinstall`
- `test`
- `coverage`
- `test:watch`
- `prepare`

## Script Details and Execution Instructions

### `preinstall`

This script runs before the installation process begins. It utilizes the `only-allow` package to ensure that only `pnpm` is used as the package manager. To execute this script, run the following command:

```shell
$ pnpm run preinstall
```

### `start`

This script starts the development server using Gatsby. It enables hot reloading and allows you to preview the application during development. Execute the following command to start the development server:

```shell
$ pnpm run start
```

### `build`

The `build` script generates a production-ready build of the application using Gatsby. It creates optimized and minified assets ready for deployment. To build the application, use the following command:

```shell
$ pnpm run build
```

### `serve`

This script serves the previously built production version of the application locally. It is useful for testing the application as it would appear in a production environment. To serve the built application, run the following command:

```shell
$ pnpm run serve
```

### `clean`

The `clean` script removes the built assets and caches created by Gatsby. It is used to clean up the project directory before rebuilding or serving the application. Execute the following command to clean the project:

```shell
$ pnpm run clean
```

### `type-check`

This script runs TypeScript's type checker (`tsc`) without emitting any compiled files. It checks the project's TypeScript code for type errors. To perform the type check, use the following command:

```shell
$ pnpm run type-check
```

### `lint`

The `lint` script runs ESLint to check the project's source code for linting errors. It focuses on files with specific extensions and ignores the patterns specified in the `.gitignore` file. Run the following command to lint the source code:

```shell
$ pnpm run lint
```

### `lint:fix`

This script uses Stylelint to automatically fix linting errors in files ending with `styles.tsx`. To fix the linting errors, execute the following command:

```shell
$ pnpm run lint:fix
```

### `format`

The `format` script uses Prettier to format the project's source code. It formats files with specific extensions and respects the patterns specified in the `.gitignore` file. To format the source code, run the following command:

```shell
$ pnpm run format
```

### `postinstall`

This script is executed after the installation process and is responsible for setting up Husky commit hooks. It installs Husky and configures it to run the necessary hooks for linting and formatting. Use the following command to run the post-installation script:

```shell
$ pnpm run postinstall
```

### `test`

The `test` script runs the tests for the project using Vitest. It executes the tests defined in the project

's test files. To run the tests, use the following command:

```shell
$ pnpm run test
```

### `coverage`

This script runs the tests using Vitest and generates a code coverage report. It provides information about the percentage of code covered by the tests. Execute the following command to generate the coverage report:

```shell
$ pnpm run coverage
```

### `test:watch`

The `test:watch` script runs the tests in watch mode, which means it automatically re-runs the tests when changes are made to the project's files. To start the watch mode, use the following command:

```shell
$ pnpm run test:watch
```

### `prepare`

This script is executed by Husky during the installation process. It installs Husky and sets it up to run the necessary hooks for linting and formatting. To execute the prepare script, run the following command:

```shell
$ pnpm run prepare
```

---

These are the package scripts available in the AEF Brochure Site project. You can execute each script as described using `pnpm`. If you have any questions or encounter any issues, please don't hesitate to ask for assistance.

## Testing with Vitest

### Test just one file

- Use this syntax

```shell
$ pnpm run test -- --grep="YearBlock.spec.tsx"
```

## Troubleshooting

- if you see a test error after thinking you fixed it, run all tests again and update the test results and fix the issue that was broken
- if you change files and it no longer imports a file that you know is correct than restart TS server in VS Code with cmd+shft+p
  and choose reload or if in a ts file TS Reload server
