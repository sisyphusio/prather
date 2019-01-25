## Workflow of ACF-to-React Components:

1. Add ACF to Wordpress Backend -- making sure to create a unique name for the new custom field / component.
2. Determine which props can be controlled by user on WP, remember names of props.
3. Create corresponding component in /src/components that expects the same props defined by WP
4. Add new component to mapping function in /src/util/mapAcfToReact.js
5. Profit

## Rules of ACF components:
- Every component will take up 100% width.
- Keep number of variables for each component LOW -- prefer multiple similar components to fewer "all-in-one" components.
- Keep styles contained per component.

** Feel free to add to this list **
