# Step Journey Library

`step-journey` is an Angular library designed to create customizable and dynamic step-by-step progress bars. This library allows you to define a sequence of steps with customizable colors, statuses, and labels, making it ideal for visualizing multi-step workflows.

## Features

- **Dynamic Step Management**: Easily update the list of steps and display their statuses as `completed`, `current`, or `pending`.
- **Customizable Styling**: Define specific colors for each step or set defaults for `completed`, `current`, and `pending` statuses.
- **Flexible Divider Width**: Customize the width of dividers between steps for enhanced visual control.
- **Modular Components**: Library is structured with separate components for each step, divider, and overall journey, enabling clear customization and maintenance.

## Project Structure

The `step-journey` library is structured as follows:

```plaintext
step-journey/
├── projects/
│   └── step-journey/
│       ├── src/
│       │   ├── lib/
│       │   │   ├── step-journey.module.ts        # Library module
│       │   │   ├── step-journey.component.ts      # Main component (controller)
│       │   │   ├── step-journey.types.ts          # Shared interfaces and types
│       │   │   ├── progress-steps/                # Container for step and divider components
│       │   │   │   ├── progress-steps.component.ts
│       │   │   │   ├── progress-steps.component.html
│       │   │   │   ├── progress-steps.component.css
│       │   │   ├── step/
│       │   │   │   ├── step.component.ts
│       │   │   │   ├── step.component.html
│       │   │   │   └── step.component.css
│       │   │   └── divider/
│       │   │       ├── divider.component.ts
│       │   │       ├── divider.component.html
│       │   │       └── divider.component.css
```

## Installation

To use `step-journey` in your Angular project:

1. Clone the repository and navigate to the project root.
2. Install dependencies:
   ```bash
   npm install
   ```

## Building the Library

To build the library, run:

```bash
ng build step-journey
```

This command will compile the library and place the output in the `dist/step-journey` directory. After building, the library can be linked locally or published to a package registry like npm.

## Testing the Library

The library includes a `test-app` project to help with testing and development.

To run the test application:

1. **Serve the Test App**:
   ```bash
   ng serve --project=test-app
   ```
   This will start the test app on `http://localhost:4200`, where you can see `step-journey` in action.

2. **Testing Components**:
   Run `ng test` to execute unit tests for the library components. This will help verify that each component behaves as expected.

## Usage

### Importing the Module

In your Angular application, import `StepJourneyModule` from `step-journey` in the main application module:

```typescript
import { StepJourneyModule } from 'step-journey';

@NgModule({
  imports: [StepJourneyModule],
  // other imports
})
export class AppModule {}
```

### Adding `StepJourneyComponent` to Your Template

The main component, `lib-step-journey`, accepts an array of steps and other optional customization inputs.

Example usage in a template:

```html
<lib-step-journey
  [steps]="[
    { label: 'Step 1', status: 'completed', color: '#4CAF50' },
    { label: 'Step 2', status: 'completed' },
    { label: 'Step 3', status: 'current', color: '#FF9800', tooltipText: 'Step 3 tooltip text' },
    { label: 'Step 4', status: 'pending' }
  ]"
  dividerWidth="80px"
  maxWidth="900px"
  fontSize="1.2em"
></lib-step-journey>
```

### Properties

The `StepJourneyComponent` supports the following properties:

- **`steps`** (`Step[]`): An array of steps defining each step’s `label`, `subLabel`, `status`, and optional `color`.
  - `label` (string): Main label for the step.
  - `subLabel` (string, optional): Additional label below the main label.
  - `status` (`'completed' | 'current' | 'pending'`): Defines the step's state.
  - `color` (string, optional): Custom color for this specific step.
  - `tooltipText` (string, optional): Custom description for this specific step, appears as an html title attribute.
- **`dividerWidth`** (`string`, optional): Width of dividers between steps. Default is `4px`.
- **`maxWidth`** (`string`, optional): Max width of complete component. Default is `600px`.
- **`fontSize`** (`string`, optional): Font size of label. Default is `0.7em`.

### Updating Steps Dynamically

To dynamically update the steps, use an Angular binding and a function in your component class. For example:

#### In `app.component.ts`

```typescript
export class AppComponent {
  steps = [
    { label: 'Step 1', status: 'completed', color: '#4CAF50' },
    { label: 'Step 2', status: 'completed' },
    { label: 'Step 3', status: 'current', color: '#FF9800', tooltipText: 'Step 3 tooltip text' },
    { label: 'Step 4', status: 'pending' }
  ];

  updateSteps() {
    this.steps = [
      { label: 'Step 1', status: 'completed', color: '#4CAF50' },
      { label: 'Step 2', status: 'completed' },
      { label: 'Step 3', status: 'completed', tooltipText: 'Step 3 tooltip text' },
      { label: 'Step 4', status: 'current', color: '#FF9800' },
      { label: 'Step 5', status: 'pending' }
    ];
  }
}
```

#### In `app.component.html`

```html
<button (click)="updateSteps()">Update Steps</button>
<lib-step-journey [steps]="steps" dividerWidth="80px" maxWidth="900px" fontSize="1.2em"></lib-step-journey>
```

## Contributing

If you'd like to contribute, please fork the repository and make changes as you'd like. Submit a pull request for any bug fixes or enhancements.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.