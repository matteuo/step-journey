# Contributing to Step Journey

Thank you for considering contributing to our project! Here are some guidelines to help you get started.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How to Contribute](#how-to-contribute)
- [Development Setup](#development-setup)
- [Coding Standards](#coding-standards)
- [Commit Messages](#commit-messages)
- [Pull Request Process](#pull-request-process)
- [Issue Reporting](#issue-reporting)
- [License](#license)

## Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md).

## How to Contribute

1. **Fork the repository** on GitHub.
2. **Clone your forked repository** to your local machine:
   ```bash
   git clone https://github.com/matteuo/step-journey.git
   ```
3. **Create a new branch** for your changes:
   ```bash
   git checkout -b my-new-feature
   ```
4. **Make your changes** and commit them:
   ```bash
   git commit -am 'Add some feature'
   ```
5. **Push your branch** to GitHub:
   ```bash
   git push origin my-new-feature
   ```
6. **Open a Pull Request** on GitHub.

## Development Setup

To set up your development environment:

1. Ensure you have Java and Maven installed.
2. Clone the repository and navigate to the project directory.
3. Run the following command to install dependencies and build the project:
   ```bash
   mvn clean install
   ```

## Coding Standards

Please ensure your code adheres to the following standards:

- Follow the [Google Java Style Guide](https://google.github.io/styleguide/javaguide.html).
- Write clear and concise comments.
- Include Javadoc comments for all public classes and methods.
- Write tests for new functionality and ensure existing tests pass.

## Commit Messages

Write clear and descriptive commit messages. Use the following format:

```
Short (50 chars or less) summary of changes

More detailed explanatory text, if necessary. Wrap it to about 72 characters or so. In some contexts, the first line is treated as the subject of the commit and the rest of the text as the body. The blank line separating the summary from the body is critical (unless you omit the body entirely); various tools like `log`, `shortlog` and `rebase` can get confused if you run the two together.

Explain the problem that this commit is solving. Focus on why you are making this change as opposed to how (the code explains that). Are there side effects or other unintuitive consequences of this change? Here's the place to explain them.
```

## Pull Request Process

When you're ready to submit a pull request:

1. Ensure that all tests pass.
2. Ensure your code follows the project's coding standards.
3. Update the documentation as necessary.
4. Submit your pull request, linking to any related issues in the description.
5. One of the project maintainers will review your pull request and provide feedback.

## Issue Reporting

If you find a bug or have an idea for a new feature, please report it by opening an issue on GitHub. Provide as much detail as possible to help us understand and resolve the issue quickly.

## License

By contributing to this project, you agree that your contributions will be licensed under the MIT License.