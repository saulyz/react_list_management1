This project is for testing React patterns.

Please check branches with 'stage-..' as these refer to a working version.

To start the app use `npm run start`.

### Changelog
* stage-1-simple-list
    * very basic working list: add people and select. All in one component
    * styling to browser defaults
* stage-2-comp-decomposition
    * List component is divided into subcomponents: Item, Input.
    * Subcomponents have event handlers from parent Component
    * Better styling
* stage-3-decoupled-state-management
    * State management is disconnected from List component and is managed by lib react-simple-state
    * Components can subscribe to state changes and reflect to it